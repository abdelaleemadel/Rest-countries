async function getLocalCountries(countryName) {
  console.log("local");
  let res = await fetch("http://localhost:3000/data.json", {
    cache: "force-cache",
  });
  let data = await res.json();
  let countries = data;
  let localCountries;
  if (countryName) {
    countries = data.filter((country) => country.name === countryName);
    localCountries = countries.map((country) => {
      return {
        flags: { png: country.flags.png, alt: `The flag of ${country.name}` },
        name: { common: country.name, nativeName: country.nativeName },
        capital: [country.capital],
        population: country.population,
        region: country.region,
        tld: country.topLevelDomain,
        subregion: country.subregion,
        borders: country.borders,
        languages: country.languages,
        currencies: country.currencies,
      };
    });
  } else {
    localCountries = countries.map((country) => {
      return {
        flags: { png: country.flags.png, alt: `The flag of ${country.name}` },
        name: { common: country.name },
        capital: [country.capital],
        population: country.population,
        region: country.region,
      };
    });
  }

  return localCountries;
}

export async function getCountries() {
  let countries;
  try {
    /*  throw new Error("") */
    let res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags"
    );
    if (res.status != 200) throw new Error("not found");
    countries = await res.json();
    if (!countries) throw new Error("not found");
  } catch (error) {
    countries = await getLocalCountries();
  }
  return countries;
}

export async function searchCountries(input) {
  let countries;
  input = input.toLowerCase();

  try {
    let res = await fetch(
      `https://restcountries.com/v3.1/name/${input}?fields=name,population,capital,region,flags`,
      { next: { revalidate: 86400 } }
    );
    if (res.status != 200) throw new Error("not found");
    countries = await res.json();
  } catch (error) {
    let allCountries = await getLocalCountries();
    countries = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(input)
    );
  }

  return countries;
}

export async function getCountryDetails(countryName) {
  let country;
  try {
    throw new Error("");
    let data = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,tld,currencies,capital,region,subregion,languages,flags,borders,population`
    );
    country = await data.json();
  } catch (error) {
    country = await getLocalCountries(countryName);
  }
  return country;
}
