import { getArticle } from "@/functions/getArticle";
import { imageDefinitonType } from "@/types";
import { MDXRemote } from 'next-mdx-remote/rsc'
import style from "./styles/Article.module.css"


async function Article({slug}:{slug:string}){
  const post = await getArticle(slug) as imageDefinitonType

  // const convertFrom = slug.split("-")[0];
  // const convertTo = slug.split("-")[2];
  // const p1 = articles.find((art: articleType) =>
  //   art.title?.toLowerCase().includes(convertFrom.toLowerCase())
  // );
  // const p2 = articles.find((art: articleType) =>
  //   art.title?.toLowerCase().includes(convertTo.toLowerCase())
  // );
  if(!post.attributes){
    return <>...</>
  }
  return (
    <div className="w-full text-gray-200 flex flex-col custom" >
      <h2>{post.attributes.title}</h2>
    <div className=" w-full  text-gray-200">
       {/* @ts-expect-error Server Component */}

    <MDXRemote source={post.attributes.content}/>
    </div>
   
    </div>
  );
}

export default Article;


{/* <div>
        <h2 className="w-full text-left font-medium text-2xl my-6">
          {p1?.title}
        </h2>
        {p1?.paragraphs.map((p, index) => {
          return (
            <p
              key={`${p.body[0]}-${index}`}
              className=" indent-3 leading-6 my-6"
            >
              {p.body}
            </p>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <Link
          href={
            "https://afflat3e1.com/lnk.asp?o=24142&c=918277&a=236088&k=3BC923DB62716875AA5870ACD7F89833&l=25170"
          }
        >
          <Image
            alt="camera_lamp"
            src={"/adBanners/camera_lamp.gif"}
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div>
        <h2 className="w-full text-left font-medium text-2xl my-6">
          {p2?.title}
        </h2>
        {p2?.paragraphs.map((p, index) => {
          return (
            <p
              key={`${p.body[0]}-${p.body[1]}-${index}`}
              className=" indent-3 leading-6 my-6"
            >
              {p.body}
            </p>
          );
        })}
      </div> */}