import Image from "next/image";
import ButtonBack from "../../_components/ButtonBack";
import BorderCountries from "@/app/_components/BorderCountries";
import { getCountryDetails } from "@/app/_lib/data-service";

async function page({ params }) {
  const { countryName } = await params;
  /* let data = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,tld,currencies,capital,region,subregion,languages,flags,borders,population`
  );
  let countryDetails = await data.json(); */
  let countryDetails = await getCountryDetails(countryName);
  let {
    flags: { png: flag, alt },
    name: { common: name, nativeName },

    tld,
    currencies,
    capital,
    region,
    subregion,
    languages,
    population,
    borders,
  } = countryDetails[0];
  const languagesKeys = Object.keys(languages);
  /*  `https://restcountries.com/v3.1/name/Belgium?fullText=true&fields=name,tld,currencies,capital,region,subregion,languages,flags,population` */
  return (
    <div className="mx-auto  w-9/10 px-5 md:px-0">
      <ButtonBack />
      <div className=" mt-20 dark:text-white">
        <div className="relative aspect-16/10">
          <Image src={flag} alt={alt} fill className="object-cover" />
        </div>
        <div className="mt-5 py-5">
          <div>
            <p className="text-4xl font-black my-5">{name}</p>
          </div>
          <div className="leading-9 text-lg">
            <p>
              <span className="font-semibold">Native Name: </span>
              {nativeName[languagesKeys[languagesKeys.length - 1]]["common"] ||
                nativeName}
            </p>
            <p>
              <span className="font-semibold">Population: </span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region: </span>
              {region}
            </p>
            <p>
              <span className="font-semibold">Sub Region: </span>
              {subregion}
            </p>
            <p>
              <span className="font-semibold">Capital: </span>
              {capital}
            </p>
          </div>
          <div className="leading-9 text-lg mt-10">
            <p>
              <span className="font-semibold">Top Level Domain: </span>
              {tld[0]}
            </p>
            <p>
              <span className="font-semibold">Currencies: </span>
              {Object.keys(currencies).map(
                (key, index) => `${index ? `, ` : ""}${currencies[key]["name"]}`
              )}
            </p>
            <p>
              <span className="font-semibold">Languages: </span>
              {languagesKeys.map(
                (key, index) =>
                  `${index ? `, ` : ""}${
                    languages[key]["name"] || languages[key]
                  }`
              )}
            </p>
          </div>
          <div className="mt-10 ">
            <p className="font-semibold text-xl mb-5">Border Countries: </p>
            <BorderCountries countries={borders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
