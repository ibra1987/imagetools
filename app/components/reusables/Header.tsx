import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="bg-gray-700  w-full flex justify-center items-center p-2 py-4 fixed border-b border-b-gray-700 text-gray-300 z-50 ">
      <section className=" w-10/12 flex justify-between items-start md:items-center">
        <Logo />
        <NavBar />
      </section>
    </header>
  );
}

export default Header;
