import Link from "next/link";
import React from "react";

function EmailSubscription() {
  return (
    <section className="h-60 w-full   flex flex-col justify-center items-center ">
      <h1 className="w-full text-center  text-black font-extrabold tracking-wide text-2xl p-4">
        Have a suggestion or a question?
      </h1>
      <Link
        href={"/contact"}
        className="p-2 px-20 rounded bg-indigo-500 text-white font-medium "
      >
        {" "}
        Send me a message
      </Link>
    </section>
  );
}

export default EmailSubscription;
