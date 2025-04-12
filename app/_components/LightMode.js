import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
function LightMode() {
  return (
    <div className="text-2xl flex justify-center items-center">
      <FontAwesomeIcon icon={faMoon} className="mx-2" />
      <p>Light Mode</p>
    </div>
  );
}

export default LightMode;
