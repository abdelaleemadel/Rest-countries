"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { getTheme, setCookies } from "../_lib/actions";

function LightMode() {
  async function handleToggle() {
    await setCookies();
  }

  return (
    <div
      className="text-lg   font-semibold flex justify-center items-center"
      onClick={handleToggle}
    >
      <div className="dark:hidden">
        <FontAwesomeIcon icon={faMoon} className="mx-2 -rotate-35" />
      </div>
      <div className="hidden dark:block">
        <FontAwesomeIcon
          icon={solidMoon}
          className="mx-2 hidden dark:block -rotate-35"
        />
      </div>

      <p>Dark Mode</p>
    </div>
  );
}

export default LightMode;
