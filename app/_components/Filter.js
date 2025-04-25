"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const defValue = searchParams.get("region") || "";

  function handleSelection(e) {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("region", value);
    router.replace(`${pathname}?${params.toString()}`);
    console.log(e.target.value);
  }

  return (
    <div className="self-start min-w-7/12 dark:bg-dark-blue relative font-semibold rounded">
      <select
        name="region"
        id="region"
        title="region"
        onChange={handleSelection}
        className=" h-15 font-semibold dark:bg-dark-blue bg-white w-full appearance-none focus-visible:outline-none   rounded-lg shadow-lg - after:border-5  bg-right px-5 "
        defaultValue={defValue}
      >
        <option className="border" value="" defaultValue hidden>
          Filter by Region
        </option>
        <option className="border" value="Africa">
          Africa
        </option>
        <option value="Americas" className="font-semibold">
          Americas
        </option>
        <option value="Asia" className="font-semibold">
          Asia
        </option>
        <option value="Europe" className="font-semibold">
          Europe
        </option>
        <option value="Oceania" className="font-semibold">
          Oceania
        </option>
        <option value="Antarctic" className="font-semibold">
          Antarctic
        </option>
        <option value="all" className="font-semibold">
          All
        </option>
      </select>
      <div className="absolute inset-y-[0%] top-0 right-0 flex justify-center items-center px-5   pointer-events-none">
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
  );
}

export default Filter;
