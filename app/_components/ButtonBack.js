"use client";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

function ButtonBack() {
  const router = useRouter();

  return (
    <button
      className="border flex items-center gap-x-2 px-8 py-3"
      onClick={() => router.back()}
    >
      <FontAwesomeIcon icon={faArrowLeftLong} className="" size="lg" />
      <span className="">Back</span>
    </button>
  );
}

export default ButtonBack;
