"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Search() {
  const p = 5;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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
      className="flex border-2 w-100 items-center p-1"
    >
      <button>
        <FontAwesomeIcon className="me-3" icon={faMagnifyingGlass} />
      </button>
      <input
        name="search"
        className="w-[100%]"
        placeholder="search for a country..."
      />
    </form>
  );
}

export default Search;
