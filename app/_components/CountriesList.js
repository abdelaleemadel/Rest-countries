import CountryItem from "./CountryItem";

async function CountriesList({ region }) {
  let link;
  if (!region || region === "all") {
    link =
      "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags";
  } else {
    link = `https://restcountries.com/v3.1/region/${region}?fields=name,population,capital,region,flags`;
  }
  let data = await fetch(link);
  let countries = await data.json();

  let displayed = countries;
  console.log(link);
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
