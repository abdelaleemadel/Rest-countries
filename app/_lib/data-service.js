async function getLocalCountries() {
  console.log("local");
  let res = await fetch("http://localhost:3000/data.json", {
    cache: "force-cache",
  });
  let data = await res.json();
  let localCountries = data.map((country) => {
    return {
      flags: { png: country.flags.png, alt: `The flag of ${country.name}` },
      name: { common: country.name },
      capital: [country.capital],
      population: country.population,
      region: country.region,
    };
  });
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
