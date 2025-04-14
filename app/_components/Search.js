import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
  return (
    <div className="flex border-2 w-100 items-center p-1">
      <FontAwesomeIcon className="me-3" icon={faMagnifyingGlass} />
      <input className="w-[100%]" placeholder="search for a country..." />
    </div>
  );
}

export default Search;
