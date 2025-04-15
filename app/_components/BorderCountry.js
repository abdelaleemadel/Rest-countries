import Link from "next/link";

async function BorderCountry({ countryCode }) {
  let data = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name`
  );
  let country = await data.json();
  const {
    name: { common: countryName },
  } = country;
  console.log(country);
  return (
    <Link href={`/country/${countryName}`} className="border px-4 py-2">
      <p>{countryName}</p>
    </Link>
  );
}

export default BorderCountry;
