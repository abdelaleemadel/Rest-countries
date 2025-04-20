"use server";
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
    throw new Error("");
    let res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags"
    );
    if (res.status == 404) throw new Error("not found");
    countries = await res.json();
    if (!countries) throw new Error("not found");
  } catch (error) {
    countries = await getLocalCountries();
  }
  return countries;
}
