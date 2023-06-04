import SideBar from "@/app/convert-image/components/SideBar";
import Upload from "../../components/reusables/core-functionality/Upload";
import convertibles from "@/assets/convertibles";
import Article from "@/app/components/reusables/Article";
import { AiOutlineWarning } from "react-icons/ai";

const slugs = convertibles.map((option) => option.toLowerCase());

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const conversionType = slugs.find((s) => s === slug.toLowerCase()); //ex jpg-to-png
  if (!conversionType)
    return (
      <div className="h-sreen flex justify-center items-center">
        Page not found
      </div>
    );

  const targetFormat = conversionType.split("-")[2].toUpperCase();
  const originalFormat = conversionType.split("-")[0];
  let relatedTools = slugs.filter((s) =>
    s.toLowerCase().includes(originalFormat || targetFormat)
  );

  return (
    <>
      <div className="!bg-white mx-auto w-full flex flex-col justify-start items-center">
        <h1 className="my-10 text-6xl flex flex-col sm:flex-row justify-center space-x-4 items-center font-extrabold tracking-wider ">
          <span className="">convert</span>
          <div>
            <span className="text-indigo-500 underline">{originalFormat}</span>
            <span> to</span>
            <span className="text-red-400 underline">
              {" "}
              {targetFormat.toLowerCase()}
            </span>
          </div>
        </h1>
        <p className="w-11/12 md:w-1/2 mx-auto">
          Convert your {originalFormat.toUpperCase()} images to{" "}
          {targetFormat.toUpperCase()} format effortlessly using this free
          online tool. Unlike other services,
          <span
            className="border-b-4 
          
          border-gray-500 font-bold"
          >
            {" "}
            No regsitration or paid sucription needed
          </span>
          L , ensuring a hassle-free conversion experience.
        </p>
        <Upload
          tool={"img-converter"}
          targetFormat={targetFormat}
          originalFormat={originalFormat}
        />
        <div className="relative w-11/12 flex  flex-col space-x-2 md:flex-row md:justify-center md:items-start justify-start items-center ">
          <article className="bg-white w-full md:w-4/5 flex flex-col justify-start items-center  md:border-r ">
            <h2 className="w-full text-left text-3xl md:text-5xl font-extrabold p-4 bg-indigo-500 text-white uppercase">
              {" "}
              {originalFormat} and {targetFormat} characteristics
            </h2>
            <Article slug={slug} />
          </article>
          <SideBar relatedTools={relatedTools} />
        </div>
      </div>
      <div className="p-4 w-11/12 text-yellow-800 my-4 flex space-x-4 justify-center items-center">
        <span className="text-yellow-800 text-2xl">
          <AiOutlineWarning />
        </span>
        <span></span>All uploaded files are deleted after 30 min.
      </div>
    </>
  );
}
