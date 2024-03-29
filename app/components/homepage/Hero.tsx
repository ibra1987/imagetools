import Link from "next/link";

function Hero() {
  return (
    <div className=" w-full py-20 md:py-32 flex flex-col justify-center items-center px-4 md:px-10 relative ">
      <h1 className="w-full flex justify-center items-center text-3xl  md:text-6xl font-extrabold">
        <em className="brush text-red-400  mx-2 ">100% </em>{" "}
        <span className="text-gray-300"> Free Image Tools</span>
      </h1>
      <p className="text-gray-400 p-4 w-full md:w-4/5 text-sm">
        lightning-fast image transformations with our powerful image tools.
        Whether you need to remove backgrounds, compress files, or apply
        stunning filters, we&apos; ve got you covered.
      </p>
      <h2 className="mt-6 text-center font-medium py-4 bg-indigo-700 text-gray-100 rounded px-2 md:px-10 cursor-pointer hover:bg-indigo-800 transition delay-75 ease-in-out">
       <Link href="/remove-background"> Try our Image Background Removal Tool</Link>
      </h2>
    </div>
  );
}

export default Hero;
