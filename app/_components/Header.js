import Link from "next/link";
import LightMode from "./LightMode";

function Header() {
  return (
    <header className="shadow dark:bg-dark-blue dark:text-white  absolute left-0 right-0 top-0 bg-white  items-center">
      <div className="flex justify-between max-w-9/10  mx-auto  h-25  items-center">
        <Link href="/" className="focus-visible:outline-none">
          <h1 className="font-black text-md sm:text-xl focus-visible:outline-none">
            Where in the world?
          </h1>
        </Link>
        <LightMode />
      </div>
    </header>
  );
}

export default Header;
