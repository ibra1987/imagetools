import SideBar from "@/app/convert-image/components/SideBar";
import Upload from "../../components/reusables/core-functionality/Upload";
import convertibles from "@/assets/convertibles";
import converertiblesJson from "@/assets/convertiblesJson.json"
import Article from "@/app/components/reusables/Article";
import { AiOutlineWarning } from "react-icons/ai";
import { Metadata } from "next";

type props ={
  params:{slug:string}
}

type seoTags ={
  slug:string,
  title:string,
  description:string
}

const slugs = convertibles.map((option) => option.toLowerCase());

export  async function generateMetadata({params}:props):Promise<Metadata>{

  const { slug } = params;

  const conversionType = slugs.find((s) => s === slug.toLowerCase()); //ex jpg-to-png
  
  const targetFormat = conversionType?.split("-")[2].toUpperCase();
  const originalFormat = conversionType?.split("-")[0];
  const {title,description} : Partial<seoTags> = converertiblesJson.find((item:seoTags)=>item.slug === conversionType) || {}
  return  {

    title:`${title} | Free Online Image Converter `,
    description:description,
    robots: {
     index: true,
     follow: true,
     nocache: false,
     googleBot: {
       index: true,
     },
   },
   }
}

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
      <div className=" mx-auto w-full flex flex-col justify-start items-center">
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
          online tool. 
        </p>
        <Upload
          tool={"img-converter"}
          targetFormat={targetFormat}
          originalFormat={originalFormat}
        />
        <div className="relative w-10/12 flex  flex-col space-x-2 md:flex-row md:justify-center md:items-start justify-start items-center ">
          <article className=" w-full md:w-4/5 flex flex-col justify-start items-center pr-2  md:border-r md:border-r-gray-700 ">
            <h2 className="w-full text-left text-3xl md:text-4xl font-extrabold p-4  text-gray-300">
              {" "}
              {originalFormat} and {targetFormat} characteristics
            </h2>
            <Article slug={slug} />
          </article>
          <SideBar relatedTools={relatedTools} />
        </div>
      </div>
      <div className="p-4 w-11/12 text-yellow-800 my-4 flex space-x-4 justify-center items-center">
        <span className="text-yellow-600 text-2xl">
          <AiOutlineWarning />
        </span>
        <span className="text-yellow-600 font-medium">All uploaded files are deleted after 30 min.</span>
      </div>
    </>
  );
}

