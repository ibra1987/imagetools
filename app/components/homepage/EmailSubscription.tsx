import Link from "next/link";
import React from "react";

function EmailSubscription() {
  return (
    <section className="h-60 w-full bg-[#404040]  flex flex-col justify-center items-center">
      <h1 className="w-full text-center  text-gray-100 font-extrabold tracking-wide text-2xl p-4">
        Have a suggestion or a question?
      </h1>
      <Link
        href={"/contact"}
        className="p-2 px-20 rounded bg-yellow-400 hover:bg-yellow-500 text-gray-700 font-medium "
      >
        {" "}
        Send me a message
      </Link>
    </section>
  );
}

export default EmailSubscription;
