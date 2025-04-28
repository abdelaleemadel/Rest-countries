"use client";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

function ButtonBack() {
  const router = useRouter();

  return (
    <button
      className="shadow-[0_0_16px_-3px] focus-visible:outline-0 dark:bg-dark-blue dark:text-white  rounded-sm cursor-pointer  mt-10 flex items-center font-semibold gap-x-3 px-8 py-2 text-lg bg-white dark:shadow-[0_0px_16px_-3px_rgba(0,0,0,0.5)]"
      onClick={() => router.back()}
    >
      <FontAwesomeIcon icon={faArrowLeftLong} className="text-xl" />
      <span className="">Back</span>
    </button>
  );
}

export default ButtonBack;
