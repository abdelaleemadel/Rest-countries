import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Search from "./_components/Search";
import SearchFilterBar from "./_components/SearchFilterBar";
import CountriesList from "./_components/CountriesList";
import { getAllCountries, getCountries } from "./_lib/data-service";

export default async function Home({ searchParams }) {
  const { region, search } = await searchParams;
  let countries;
  let link =
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags";
  if (search) {
    link = `https://restcountries.com/v3.1/name/${search}?fields=name,population,capital,region,flags`;
  } else {
    countries = await getCountries();
  }

  console.log(countries[0]);
  return (
    <>
      <SearchFilterBar />
      <CountriesList region={region} countries={countries} />
    </>
  );
}
