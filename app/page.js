import "@fortawesome/fontawesome-svg-core/styles.css";
import SearchFilterBar from "./_components/SearchFilterBar";
import CountriesList from "./_components/CountriesList";
import { getCountries, searchCountries } from "./_lib/data-service";

export async function generateMetadata({ searchParams }) {
  const { region, search } = await searchParams;
  let title, description;
  if (!search && !region) {
    title = "Home";
    description =
      "Browse a list of countries with their flags, population, region, and capital. Use search and filters to find any country quickly.";
  } else if (search) {
    title = `Search Results for ${search}${region ? `| ${region}` : ""}`;
    description = `Find countries that match ${search} by name${
      region ? `in ${region}` : ""
    }. Explore details like population, region, and subregion in one click.`;
  } else {
    title = region;
    description = `Find Countries in ${region}. Explore details like population, region, and subregion in one click`;
  }
  return {
    title: `${title} | RestCountries`,
    description,
  };
}
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
