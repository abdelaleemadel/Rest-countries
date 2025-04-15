import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Search from "./_components/Search";
import SearchFilterBar from "./_components/SearchFilterBar";
import CountriesList from "./_components/CountriesList";

export default async function Home({ searchParams }) {
  let data = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags"
  );
  let countries = await data.json();
  const { region } = await searchParams;
  console.log(region);
  return (
    <>
      <SearchFilterBar />
      <CountriesList region={region} countries={countries} />
    </>
  );
}
