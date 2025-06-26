import Link from "next/link";
import { getBorderCountry } from "../_lib/data-service";

async function BorderCountry({ countryCode }) {
  let country = await getBorderCountry(countryCode);
  if (!country) return;
  const {
    name: { common: countryName },
  } = country;
  return (
    <Link
      href={`/country/${countryName}`}
      className="bg-white shadow-[0_0_8px_-4px] rounded  text-center px-4 py-1.5 dark:bg-dark-blue dark:text-(--background) dark:shadow-[0_0px_8px_-4px_rgba(0,0,0,0.5)]"
    >
      <p>{countryName}</p>
    </Link>
  );
}

export default BorderCountry;
