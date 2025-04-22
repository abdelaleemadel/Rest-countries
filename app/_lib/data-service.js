async function getLocalCountries() {
  let res = await fetch("http://localhost:3000/data.json", {
    cache: "force-cache",
  });
  let countries = await res.json();
  let localCountries = countries.map((country) => {
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
      cca3: country.alpha3Code,
    };
  });

  return localCountries;
}

async function getAllCountries() {
  let countries;
  try {
    let res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,tld,currencies,capital,region,subregion,languages,flags,borders,population,cca3"
    );
    if (res.status != 200) throw new Error("not found");
    countries = await res.json();
    if (!countries) throw new Error("not found");
  } catch (error) {
    console.log("localAll");

    countries = await getLocalCountries();
  }
  return countries;
}

const allCountries = getAllCountries();

export async function getCountries() {
  let countries = await allCountries;
  return countries;
}

export async function searchCountries(input) {
  input = input.toLowerCase();
  const countries = await allCountries;

  let resultCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(input)
  );

  return countries;
}

export async function getCountryDetails(countryName) {
  const countries = await allCountries;
  const country = countries.find(
    (country) => country.name.common === countryName
  );
  return [country];
}

export async function getBorderCountry(countryCode) {
  const countries = await allCountries;

  let country = countries.find((country) => country.cca3 === countryCode);
  console.log(countryCode, country);
  return { name: { common: country.name.common } };
}
