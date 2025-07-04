async function getLocalCountries() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  console.log(baseUrl);
  let res = await fetch(`${baseUrl}/data.json`, {
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
      "https://restcountries.com/v3.1/all?fields=name,tld,currencies,capital,region,subregion,languages,flags,borders,population",
      { next: { revalidate: 86400 } }
    );
    if (res.status != 200) throw new Error("not found");
    countries = await res.json();
    if (!countries) throw new Error("not found");
  } catch (error) {
    countries = await getLocalCountries();
  }

  return countries;
}

const allCountries = getAllCountries();

export async function getCountries() {
  try {
    let countries = await allCountries;
    return countries;
  } catch (error) {
    console.error(error?.message);
    return { error: "error" };
  }
}

export async function searchCountries(input) {
  /*  */
  try {
    input = input.toLowerCase();
    const countries = await allCountries;

    let resultCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(input)
    );

    return resultCountries;
  } catch (error) {
    console.error(error?.message);
    return { error: "something is bad" };
  }
}

export async function getCountryDetails(countryName) {
  const countries = await allCountries;
  countryName =
    decodeURIComponent(countryName) /* countryName.replaceAll("%20", " ") */;
  const country = countries.find(
    (country) => country.name.common.toLowerCase() === countryName.toLowerCase()
  );
  return country ?? null;
}

export async function getBorderCountry(countryCode) {
  const countries = await allCountries;
  let country;
  if (!countries[0].cca3) {
    let res = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    let countryArr = await res.json();
    country = countryArr[0];
  } else {
    country = countries.find((country) => country.cca3 === countryCode);
  }
  if (!country) return null;
  return { name: { common: country.name.common } };
}
