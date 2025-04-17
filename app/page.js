import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Search from "./_components/Search";
import SearchFilterBar from "./_components/SearchFilterBar";
import CountriesList from "./_components/CountriesList";

export default async function Home({ searchParams }) {
  const { region, search } = await searchParams;

  let link =
    "https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags";
  if (search) {
    link = `https://restcountries.com/v3.1/name/${search}?fields=name,population,capital,region,flags`;
  }

  let data = await fetch(link);
  let countries = await data.json();

  console.log(region);
  return (
    <>
      <SearchFilterBar />
      <CountriesList region={region} countries={countries} />
    </>
  );
}
