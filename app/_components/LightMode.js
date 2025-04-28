"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { getCookies, setCookies } from "../_lib/actions";
import { useEffect, useState } from "react";

function LightMode() {
  const [mode, setMode] = useState("");
  async function handleToggle() {
    if (mode === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else if (mode === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setMode("light");
    }
    await setCookies();
  }

  useEffect(() => {
    async function getTheme() {
      const theme = await getCookies();
      let value = theme || "dark";
      setMode(value);
    }
    getTheme();
  }, []);

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
