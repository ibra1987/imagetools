function Hero() {
  return (
    <div className=" w-full bg-yellow-400 p-20 flex flex-col justify-start items-center px-10 relative">
      <h1 className="w-full flex justify-center items-center text-5xl font-extrabold">
        <span className="brush text-white text-5xl mx-1 ">100% </span>{" "}
        <span className=""> Free Image Tools</span>
      </h1>
      <p className="text-gray-500 p-4 w-11/12 md:w-2/5 text-sm">
        Say goodbye to hours of editing and hello to lightning-fast
        transformations with our powerful image tools. Whether you need to
        remove backgrounds, compress files, or apply stunning filters, we&apos;
        ve got you covered.
      </p>
      <h2 className="text-center font-medium p-2 bg-indigo-600 text-gray-100 rounded px-6 cursor-pointer hover:bg-indigo-700 transition delay-75 ease-in-out">
        Choose Your Tool
      </h2>
    </div>
  );
}

export default Hero;
