function Hero() {
  return (
    <div className=" w-full  p-32 flex flex-col justify-center items-center px-10 relative ">
      <h1 className="w-full flex justify-center items-center text-3xl sm:text-5xl md:text-6xl font-extrabold">
        <em className="brush text-red-400  mx-2 ">100% </em>{" "}
        <span className="text-gray-300"> Free Image Tools</span>
      </h1>
      <p className="text-gray-400 p-4 w-11/12 md:w-3/5 text-sm">
        lightning-fast image transformations with our powerful image tools.
        Whether you need to remove backgrounds, compress files, or apply
        stunning filters, we&apos; ve got you covered.
      </p>
      <h2 className="mt-6 text-center font-medium py-4 bg-indigo-700 text-gray-100 rounded px-10 cursor-pointer hover:bg-indigo-800 transition delay-75 ease-in-out">
        Choose Your Tool
      </h2>
    </div>
  );
}

export default Hero;
