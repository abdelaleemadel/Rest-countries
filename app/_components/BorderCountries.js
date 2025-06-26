import BorderCountry from "./BorderCountry";

function BorderCountries({ countries }) {
  return (
    <div className="flex flex-wrap gap-3  justify-start ">
      {countries &&
        Array.isArray(countries) &&
        countries.map((countryCode) => (
          <BorderCountry countryCode={countryCode} key={countryCode} />
        ))}
    </div>
  );
}

export default BorderCountries;
{
  /*  */
}
