import Link from "next/link";
import { getBorderCountry } from "../_lib/data-service";

async function BorderCountry({ countryCode }) {
  let country = await getBorderCountry(countryCode);
  const {
    name: { common: countryName },
  } = country;
  return (
    <Link href={`/country/${countryName}`} className="border px-4 py-2">
      <p>{countryName}</p>
    </Link>
  );
}

export default BorderCountry;
