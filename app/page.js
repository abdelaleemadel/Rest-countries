import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Search from "./_components/Search";
import SearchFilterBar from "./_components/SearchFilterBar";

export default function Home() {
  return (
    <>
      <SearchFilterBar />
    </>
  );
}
