import EmailSubscription from "./components/homepage/EmailSubscription";
import FileCompression from "./components/homepage/FileCompression";
import Hero from "./components/homepage/Hero";
import ImageConversion from "./components/homepage/ImageConversion";
import ImageFilters from "./components/homepage/ImageFilters";
import Showcase from "./components/homepage/Showcase";
import SingleTool from "./components/homepage/SingleTool";
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
      <Showcase />

      <EmailSubscription />
      <div className="w-full flex flex-col justify-start items-center">
        <FileCompression />
        <ImageConversion />
        {/* <ImageFilters /> */}
      </div>
    </>
  );
}
