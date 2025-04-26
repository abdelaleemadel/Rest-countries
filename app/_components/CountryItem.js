import Image from "next/image";
import Link from "next/link";

function CountryItem({ country }) {
  const {
    flags: { png: flag, alt },
    name: { common: name },
    capital,
    region,
    population,
  } = country;
  return (
    <Link
      className="rounded-lg shadow-lg  overflow-hidden"
      href={`/country/${name}`}
    >
      <div className="relative aspect-165/100">
        <Image src={flag} alt={alt} fill className="object-cover" />
      </div>

      <div className="ps-5  dark:bg-dark-blue  h-full pb-[10%] overflow-hidden">
        <p className="font-black my-[8%] text-xl">{name}</p>
        <div className=" leading-[200%] ">
          <p>
            <span className="font-semibold">Population:</span>{" "}
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span> {capital[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryItem;
