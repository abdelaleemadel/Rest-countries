import LightMode from "./LightMode";

function Header() {
  return (
    <header className=" dark:bg-dark-blue dark:text-white  absolute left-0 right-0 top-0 bg-white  items-center">
      <div className="flex justify-between max-w-9/10  mx-auto  h-25  items-center">
        <h1 className="font-black text-xl ">Where in the world?</h1>
        <LightMode />
      </div>
    </header>
  );
}

export default Header;
