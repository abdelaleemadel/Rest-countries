import Filter from "./Filter";
import Search from "./Search";

function SearchFilterBar() {
  return (
    <div className="mx-5 flex justify-between">
      <Search />
      <Filter />
    </div>
  );
}

export default SearchFilterBar;
