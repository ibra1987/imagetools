import React from "react";
import ContactForm from "./components/ContactForm";
import {Metadata} from "next";


export const metadata :Metadata = {

  title:"Contact us- imagebgemover.com",
  description:"Reach us with any inquiries or messages, and we'll get back to you promptly. We're here to assist you. Send us a message now!",
  robots: {
   index: true,
   follow: true,
   nocache: false,
   googleBot: {
     index: true,
   },
 },
 }
function page() {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-5xl my-4">Contact us</h1>
      <p className="w-full md:w-2/5">
        Please feel free to contact us for any issue, suggestion or inquiry. We
        will be happy to receive a mesage from you.
      </p>
      <ContactForm />
    </div>
  );
}

export default page;
