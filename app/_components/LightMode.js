"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
function LightMode() {
  const [lightMode, setLightMode] = useState(true);
  function handleToggle() {
    document.documentElement.classList.toggle("dark");
    setLightMode((lightMode) => !lightMode);
  }
  return (
    <div
      className="text-lg   font-semibold flex justify-center items-center"
      onClick={handleToggle}
    >
      {lightMode ? (
        <FontAwesomeIcon icon={faMoon} className="mx-2 -rotate-35" />
      ) : (
        <FontAwesomeIcon icon={solidMoon} className="mx-2 -rotate-35" />
      )}

      <p>{lightMode ? "Dark" : "Light"} Mode</p>
    </div>
  );
}

export default LightMode;
