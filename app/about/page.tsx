import React from "react";
import {Metadata} from "next";


export const metadata :Metadata = {

  title:"About- imagebgemover.com",
  description:" a passionate 36-year-old self-taught developer hailing from the beautiful country of Morocco.<br/> I have always been fascinated by the world of coding and web development, and my journey in this exciting field began during the challenging times of the Corona pandemic in 2020.",
  robots: {
   index: true,
   follow: true,
   nocache: false,
   googleBot: {
     index: true,
   },
 },
 }

const pClass ="p-4 indent-2 my-4 leading-6 text-gray-400"
export default function Page() {
  return <article className="w-full md:w-3/5 flex flex-col justify-start my-24">
   <p className={pClass}>
   Hello there! My name is Ibrahim Driouch, a passionate 36-year-old self-taught developer hailing from the beautiful country of Morocco.<br/> I have always been fascinated by the world of coding and web development, and my journey in this exciting field began during the challenging times of the Corona pandemic in 2020.
   </p>

<p className={pClass}>
My Coding Journey:

As the world faced unprecedented challenges during the pandemic, I sought solace in the world of technology. Eager to make the most of my time at home, I delved into the realm of coding and discovered the vast opportunities it had to offer. What started as a mere curiosity quickly blossomed into a full-fledged passion, and I realized that coding was more than just a hobby—it was my calling.
</p>

<p className={pClass}>
Self-Taught Developer:

With no formal education in computer science or programming, I embarked on a self-taught journey. Armed with determination and an insatiable hunger to learn, I explored various online resources, tutorials, and coding communities. Through hard work, dedication, and countless hours of practice, I honed my skills in coding languages and web development frameworks.
</p>

<p className={pClass}>
Passion for Coding and Web Development:

Coding has become more than just a skillset; it&apos;s an integral part of my life now. The ability to craft lines of code and watch them transform into functional and beautiful websites or applications is immensely gratifying. It is this passion that motivates me to continuously improve my craft and stay updated with the latest industry trends and advancements.
</p>
  </article>;
}
