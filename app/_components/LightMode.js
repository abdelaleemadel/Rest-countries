"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
function LightMode() {
  function handleToggle() {
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div
      className="text-2xl flex justify-center items-center"
      onClick={handleToggle}
    >
      <FontAwesomeIcon icon={faMoon} className="mx-2" />
      <p>Light Mode</p>
    </div>
  );
}

export default LightMode;
