import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className=" bg-white w-full flex justify-center items-center h-16 p-4 fixed border-b  text-gray-500 z-50 ">
      <section className=" w-11/12 flex justify-between items-center">
        <Logo />
        <NavBar />
      </section>
    </header>
  );
}

export default Header;
