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
  return (
    <header className={scrolled ? "bg-gray-800  w-full flex justify-center items-center p-2 py-4 fixed  text-gray-300 z-50 border-b border-b-gray-700" : "bg-gray-900  w-full flex justify-center items-center p-2 py-4 fixed  text-gray-300 z-50 "}>
      <section className=" w-10/12 flex justify-between items-start md:items-center">
        <Logo />
        <NavBar />
      </section>
    </header>
  );
}

export default Header;
