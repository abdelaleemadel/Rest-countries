import LightMode from "./LightMode";

function Header() {
  return (
    <header className="flex justify-between m-10">
      <h1>Where in the world</h1>
      <LightMode />
    </header>
  );
}

export default Header;
