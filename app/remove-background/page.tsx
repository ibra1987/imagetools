import { AiOutlineWarning } from "react-icons/ai";
import Upload from "../components/reusables/core-functionality/Upload";
import SideBar from "./components/SideBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Background Removal Tool",
  description:
    "Remove Backgrounds from Images with Our FreeImage Background Remover Tool - Create Stunning Visuals with Ease! Get Professional Results, Save Time, and Enhance Your Projects.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
    },
  },
};

export default async function Page() {
  const relatedTools = ["compress-image", "convert-image"];
  return (
    <>
      <h1 className="mt-10 mb-4 text-3xl font-extrabold ">
        Remove Image Background
      </h1>
      <p className="w-11/12 md:w-3/5 text-sm mx-auto">
        Remove Backgrounds from Images with Our Advanced Image Background
        Remover Tool - Create Stunning Visuals with Ease! Get Professional
        Results, Save Time, and Enhance Your Projects.
      </p>
      <Upload tool={"bg-remover"} />
      <div className="relative w-full flex  flex-col space-x-2  justify-start items-center ">
        <div className="relative w-11/12 flex  flex-col space-x-2 md:flex-row md:justify-center md:items-start justify-start items-center ">
          <article className=" w-full md:w-4/5 flex flex-col justify-start items-center  md:border-r ">
            <h2 className="w-full text-left text-3xl md:text-5xl  font-extrabold p-4 bg-indigo-500 text-white mb-4 uppercase">
              Remove Backgrounds from ANY Image for free
            </h2>
            <p className="m-2">
              Discover the convenience of our free image background removal tool
              that allows you to easily remove backgrounds from images. Say
              goodbye to complex editing software and hello to seamless
              background removal without any cost or registration. Read on to
              learn more!
            </p>
            <p className="m-2">
              Struggling to remove backgrounds from images? Our free image
              background removal tool is here to simplify your design process.
              With its user-friendly interface and advanced algorithms, you can
              effortlessly remove backgrounds from your images, all at no cost
              or registration. Say goodbye to tedious editing tasks and hello to
              streamlined design workflows. Keep reading to explore the features
              and benefits of our tool.
            </p>
            <h3 className="w-full text-left font-medium text-2xl  p-2">
              Simple and Efficient Background Removal
            </h3>
            <p className="m-2 indent-6">
              Our image background removal tool offers a simple and efficient
              solution for removing backgrounds from images. With just a few
              clicks, you can upload your image and let our intelligent
              algorithms accurately identify and remove the background, leaving
              you with a clean, transparent foreground subject. No more
              struggling with complex editing software or manual selection
              tools.
            </p>
            <h3 className="w-full text-left font-medium text-2xl  p-2">
              User-Friendly Interface for Seamless Removal{" "}
            </h3>
            <p className="indent-6">
              Designed with ease of use in mind, our tool features a
              user-friendly interface that makes background removal a breeze.
              You don&apos; t need any technical expertise to navigate through
              the tool&apos; s options. Simply upload your image, and with
              intuitive controls, you can refine the selection if needed and
              achieve a flawless background removal result. Save time and effort
              in your design projects.
            </p>
            <h3 className="w-full text-left font-medium text-2xl  p-2">
              Swift Processing for Quick Results
            </h3>
            <p className="m-2 indent-6">
              We understand that time is of the essence. Our image background
              removal tool is built for speed, ensuring quick processing without
              compromising on accuracy. Whether you&apos; re working on a single
              image or a batch of images, our tool will swiftly remove the
              backgrounds, allowing you to move forward with your creative
              projects promptly.
            </p>
            <h3 className="w-full text-left font-medium text-2xl  p-2">
              SEO Benefits of Background-Removed Images
            </h3>
            <p className="indent-6">
              Search engine optimization (SEO) is vital for boosting your
              website&apos; s visibility. Our tool contributes to your SEO
              efforts by providing background-removed images that are optimized
              for web usage. By eliminating unnecessary background elements, the
              resulting images have smaller file sizes, leading to faster page
              load times. This, in turn, improves user experience and can
              positively impact your search engine rankings.
            </p>
            <p className="indent-6 m-2">
              Unlock the convenience and efficiency of our free image background
              removal tool. Remove backgrounds from your images effortlessly,
              without the need for complex software or any financial
              commitments. With its user-friendly interface, swift processing,
              and potential SEO benefits, our tool is a valuable asset for
              designers, marketers, and content creators. Start using our tool
              today and streamline your design workflows. No registration or
              payment required – get ready to elevate your image editing
              experience!
            </p>
          </article>
          <SideBar relatedTools={relatedTools} />
        </div>
      </div>
      <div className="p-4 w-11/12 text-yellow-800  flex space-x-4 justify-center items-center">
        <span className="text-yellow-800 text-2xl">
          <AiOutlineWarning />
        </span>
        <span></span>All uploaded files are deleted after 30 min.
      </div>
    </>
  );
}
