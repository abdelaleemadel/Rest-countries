"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defValue = searchParams.get("search") || "";
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = formData.get("search");
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname.toString()}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  card h-15 w-full bg-white rounded shadow-lg text-dark-gray dark:bg-dark-blue dark:text-white items-center p-1"
    >
      <button>
        <FontAwesomeIcon className="mx-7" size="lg" icon={faMagnifyingGlass} />
      </button>
      <input
        name="search"
        defaultValue={defValue}
        className="w-full h-full focus-visible:outline-none text-lg dark:placeholder:text-white"
        placeholder="Search for a country..."
      />
    </form>
  );
}

export default Search;
