import Filter from "./Filter";
import Search from "./Search";

function SearchFilterBar() {
  return (
    <div className="max-w-9/10  mx-auto flex-wrap flex flex-col  mt-10 gap-12 md:flex-row md:flex-nowrap md:justify-between">
      <Search />
      <Filter />
    </div>
  );
}

export default SearchFilterBar;
