"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
function LightMode() {
  const [darkMode, setdarkMode] = useState(true);

  function handleToggle() {
    document.documentElement.classList.toggle("dark");
    setdarkMode((prevMode) => !prevMode);
  }
  useEffect(() => {
    const localMode = localStorage.getItem("dark");
    if (localMode !== null && localMode === "false") {
      handleToggle();
    } else {
      setdarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", darkMode);
  }, [darkMode]);
  return (
    <div
      className="text-lg   font-semibold flex justify-center items-center"
      onClick={handleToggle}
    >
      {!darkMode ? (
        <FontAwesomeIcon icon={faMoon} className="mx-2 -rotate-35" />
      ) : (
        <FontAwesomeIcon icon={solidMoon} className="mx-2 -rotate-35" />
      )}

      <p>Dark Mode</p>
    </div>
  );
}

export default LightMode;
