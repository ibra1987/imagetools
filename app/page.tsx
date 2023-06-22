import BackgroundRemoval from "./components/homepage/BackgroundRemoval";
import EmailSubscription from "./components/homepage/EmailSubscription";
import FileCompression from "./components/homepage/FileCompression";
import Hero from "./components/homepage/Hero";
import ImageConversion from "./components/homepage/ImageConversion";
import Showcase from "./components/homepage/Showcase";
import SingleTool from "./components/homepage/SingleTool";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free image tools, Background Removal, image compression, image conversion, text extraction",
  description:
    " Our Versatile Image Toolbox for Background Removal, Compression, and Conversion. Simplify your workflow with powerful tools to remove backgrounds, compress images, and convert formats seamlessly. Elevate your website's performance and captivate users with stunning visuals using our intuitive image solutions.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
    },
  },
};
export default function Home() {
  return (
    <>
      <Hero />

      <SingleTool
        title="Get Transparent Background for any Image"
        imagePath="/assets/bg-removed.png"
        text="  With just a few clicks, you can easily create a transparent background
          that will allow you to use your image in any design or composition"
        alt="dog-image"
      />
      <div className="w-11/12 flex flex-col justify-start items-center">
        <Showcase />
      </div>

      <EmailSubscription />
      <div className="w-10/12 flex flex-col justify-start items-center my-4">
        <FileCompression />
        <ImageConversion />
        <BackgroundRemoval />
        {/* <ImageFilters /> */}
      </div>
    </>
  );
}
