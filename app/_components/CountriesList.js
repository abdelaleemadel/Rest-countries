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
    <div className="grid pb-10 bottom-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-9/10 mx-auto mt-10 gap-14 justify-between px-[5%] sm:px-0">
      {displayed &&
        displayed.map((country) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
    </div>
  );
}

export default CountriesList;
