import Image from "next/image";
import ButtonBack from "../../_components/ButtonBack";
import BorderCountries from "@/app/_components/BorderCountries";

async function page({ params }) {
  const { countryName } = await params;
  let data = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,tld,currencies,capital,region,subregion,languages,flags,borders,population`
  );
  let countryDetails = await data.json();
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
    <div className="container border-9 mx-auto px-10 dark:bg-amber-600">
      <ButtonBack />
      <div className="border mt-10">
        <div className="relative aspect-16/10">
          <Image src={flag} alt={alt} fill className="object-cover" />
        </div>
        <div className="mt-5 py-5">
          <div>
            <p className="text-4xl font-black my-5">{name}</p>
          </div>
          <div>
            <p>
              <span className="font-bold">Native Name: </span>
              {nativeName[languagesKeys[languagesKeys.length - 1]]["common"]}
            </p>
            <p>
              <span className="font-bold">Population: </span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {region}
            </p>
            <p>
              <span className="font-bold">Sub Region: </span>
              {subregion}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {capital}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Top Level Domain: </span>
              {tld[0]}
            </p>
            <p>
              <span className="font-bold">Currencies: </span>
              {Object.keys(currencies).map(
                (key, index) => `${index ? `, ` : ""}${currencies[key]["name"]}`
              )}
            </p>
            <p>
              <span className="font-bold">Languages: </span>
              {languagesKeys.map(
                (key, index) => `${index ? `, ` : ""}${languages[key]}`
              )}
            </p>
          </div>
          <div>
            <p className="font-bold">Border Countries: </p>
            <BorderCountries countries={borders} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
