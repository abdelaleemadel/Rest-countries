import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function loading() {
  return (
    <div className="w-full text-9xl text-center my-[30%]">
      <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
    </div>
  );
}

export default loading;
