"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const regions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Antarctic",
  "all",
];

function SearchFilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const defSearchValue = searchParams.get("search") || "";
  const defFilterValue = searchParams.get("region") || "";

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    const region = formData.get("region");
    const params = new URLSearchParams(searchParams.toString());

    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    router.replace(`${pathname.toString()}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-9/10  mx-auto flex-wrap flex flex-col  mt-10 gap-12 md:flex-row md:flex-nowrap md:justify-between"
    >
      {/* Search by Name */}
      <div className="flex  h-15 w-full bg-white rounded shadow-lg text-dark-gray dark:bg-dark-blue dark:text-white items-center p-1 md:w-3/8 lg:w-3/8 xl:w-5/16 ">
        <button type="submit">
          <FontAwesomeIcon
            className="mx-7 md:max-lg:mx-4 text-xl md:max-lg:text-lg"
            icon={faMagnifyingGlass}
          />
        </button>
        <input
          name="search"
          autoComplete="false"
          defaultValue={defSearchValue}
          className="w-full h-full focus-visible:outline-none text-lg md:max-lg:text-base dark:placeholder:text-white"
          placeholder="Search for a country..."
        />
      </div>

      {/* Filter By Region */}
      <div className="self-start w-7/12 md:w-2/8 lg:w-3/16 xl:w-5/32 dark:bg-dark-blue relative font-semibold rounded">
        <select
          name="region"
          id="region"
          title="region"
          onChange={(e) => {
            const form = e.currentTarget.form;
            handleSubmit({ preventDefault: () => {}, target: form });
          }}
          className=" h-15 font-semibold dark:bg-dark-blue bg-white w-full appearance-none focus-visible:outline-none rounded-lg shadow-lg  px-5 md:max-lg:px-3"
          defaultValue={defFilterValue}
        >
          <option value="" defaultValue hidden>
            Filter by Region
          </option>
          {regions.map((region) => (
            <option key={region} className="font-semibold" value={region}>
              {region}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-[0%] top-0 right-0 flex justify-center items-center px-5 md:max-lg:px-3  pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-900 dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </form>
  );
}

export default SearchFilterBar;
