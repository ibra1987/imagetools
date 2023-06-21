import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className=" bg-white w-full flex justify-center items-center p-2 fixed border-b text-[#5c5b5b] z-50 ">
      <section className=" w-10/12 flex justify-between items-start md:items-center">
        <Logo />
        <NavBar />
      </section>
    </header>
  );
}

export default Header;
