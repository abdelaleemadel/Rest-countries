import Image from "next/image";

function CountryItem({ country }) {
  const {
    flags: { png: flag, alt },
    name: { common: name },
    capital,
    region,
    population,
  } = country;
  return (
    <div className=" mx-5 mt-5">
      <div className="relative aspect-16/10">
        <Image
          src={flag}
          alt={alt}
          fill
          className="object-cover" /* className="object-cover" */
        />
      </div>
      <div className="py-5 ps-5 bg-blue-400">
        <p className="font-black text-xl mb-5">{name}</p>
        <p>
          <span className="font-bold">Population:</span> {population}
        </p>
        <p>
          <span className="font-bold">Region:</span> {region}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {capital[0]}
        </p>
      </div>
    </div>
  );
}

export default CountryItem;
