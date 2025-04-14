import CountryItem from "./CountryItem";

async function CountriesList() {
  let data = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags"
  );
  let countries = await data.json();

  let displayed = [countries[0], countries[1], countries[2], countries[3]];
  console.log();
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
