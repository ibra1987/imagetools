"use client"
import Logo from "./Logo";
import NavBar from "./NavBar";
import { useEffect, useState } from 'react';


function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Listen for the scroll event and call the handleScroll function
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const color = scrolled ? " bg-gray-300 ": ""
  return (
    <header className={scrolled ? "border-b border-gray-200 w-full bg-white flex justify-center items-center p-2 py-4 fixed   z-50 " : "  w-full flex justify-center items-center p-2 py-4 fixed  text-gray-800 z-50 "}>
      <section className=" w-10/12 flex justify-between items-start md:items-center">
        <Logo color={color} />
        <NavBar />
      </section>
    </header>
  );
}

export default Header;
