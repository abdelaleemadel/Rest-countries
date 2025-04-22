import BorderCountry from "./BorderCountry";

function BorderCountries({ countries }) {
  console.log(countries);
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-5">
      {countries &&
        countries.map((countryCode) => (
          <BorderCountry countryCode={countryCode} key={countryCode} />
        ))}
    </div>
  );
}

export default BorderCountries;
