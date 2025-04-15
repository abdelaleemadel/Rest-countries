import CountryItem from "./CountryItem";

async function CountriesList({ region, countries }) {
  let displayed;
  if (!region) region = "all";
  if (
    region === "Asia" ||
    region === "Europe" ||
    region === "Africa" ||
    region === "Americas" ||
    region === "Oceania" ||
    region === "Antarctic"
  ) {
    displayed = countries.filter((country) => country.region === region);
  } else {
    displayed = countries;
  }

  return (
    <div className="grid sm:grid-cols-1 px-10 mt-10 gap-8">
      {displayed &&
        displayed.map((country) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
    </div>
  );
}

export default CountriesList;
