"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { getCookies, setCookies } from "../_lib/actions";
import { useEffect, useState } from "react";

function LightMode() {
  const [mode, setMode] = useState("");

  async function handleToggle() {
    const newMode = mode === "light" ? "dark" : "light";

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newMode);

    setMode(newMode);

    document.cookie = `theme=${newMode}; path=/; max-age=31536000`;
  }

  useEffect(() => {
    function getTheme() {
      const theme = document.cookie.match(/(?:^|; )theme=(dark|light)/);

      let value = theme ? theme[1] : "dark";
      setMode(value);
    }
    getTheme();
  }, []);

  return (
    <div
      className="text-sm sm:text-lg cursor-pointer  font-semibold flex justify-center items-center"
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
