"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function LightMode() {
  const [mode, setMode] = useState("");

  async function handleToggle() {
    try {
      const newMode = mode === "light" ? "dark" : "light";

      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(newMode);

      setMode(newMode);

      document.cookie = `theme=${newMode}; path=/; max-age=31536000`;
    } catch (error) {
      console.error("Failed to toggle theme.", error);
    }
  }

  useEffect(() => {
    function getTheme() {
      try {
        const theme = document.cookie.match(/(?:^|; )theme=(dark|light)/);

        const value = theme ? theme[1] : "dark";
        if (value !== "dark" && value !== "light") {
          throw new Error("Invalid theme");
        }
        setMode(value);
      } catch (error) {
        console.error("Failed to read or apply theme cookie:", error);
      }
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
