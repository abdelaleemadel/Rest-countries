"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSelection(e) {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("region", value);
    router.replace(`${pathname}?${params.toString()}`);
    console.log(e.target.value);
  }
  return (
    <div>
      <select
        name="region"
        id="region"
        onChange={handleSelection}
        className="border"
      >
        <option value="" defaultValue hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctic">Antarctic</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}

export default Filter;
