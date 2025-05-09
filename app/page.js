import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Search from "./_components/Search";
import SearchFilterBar from "./_components/SearchFilterBar";
import CountriesList from "./_components/CountriesList";
import { getCountries, searchCountries } from "./_lib/data-service";
import { cookies } from "next/headers";

export default async function Home({ searchParams }) {
  const { region, search } = await searchParams;
  let countries;
  if (search) {
    countries = await searchCountries(search);
  } else {
    countries = await getCountries();
  }

  return (
    <div className=" dark:bg-very-dark dark:text-white overflow-hidden">
      <SearchFilterBar />
      <CountriesList region={region} countries={countries} />
    </div>
  );
}
