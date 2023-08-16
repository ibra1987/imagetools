import axios from "axios";
import { NextResponse } from "next/server";
import fs from "fs";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";
import AdmZip from "adm-zip";

type data = {
  filename: string;
  base64: string;
  image_type: string;
};


export async function POST(request: Request) {
  const formdata = await request.formData();
  const timestamp = new Date().getTime();
  const files: File[] | null = formdata.getAll('userImages') as unknown as File[]
  const qualityStr = formdata.get('quality') as string;
  const imageType = files[0].type.split('/')[1]
  const quality = qualityStr ? parseInt(qualityStr): 80
 const imageTypes = ["jpeg", "png","avif", "tiff"]
 console.log(imageType)
   try {
if(imageTypes.includes(imageType)){
  let downloadLink;
  const uuid = uuidv4();
  const zip = new AdmZip();

if(files.length>1){
  files.map(async (file:File)=>{
    const imageData = await compress(quality,file,imageType)
  
      zip.addFile(
       timestamp + "-" + file.name,
       imageData as unknown as Buffer
     );
   
  })
  const path = `./public/compressed/${uuid}-${timestamp}.zip`;
  downloadLink = `/compressed/${uuid}-${timestamp}.zip`;
  zip.writeZip(path);
}else if(files.length === 1){
  const imagedata = await compress(quality,files[0],imageType) as Buffer
        await fs.promises.writeFile(
          "./public/compressed/" + timestamp + "-" + files[0].name,
          imagedata
        );
        downloadLink = "/compressed/" + timestamp + "-" + files[0].name;
}
 

return NextResponse.json(
  {
    success: "ok",
    link: downloadLink,
  },
  {
    status: 200,
  }
);
}
return NextResponse.json(
  {
    error:"error"
  },
  {
    status: 500,
  }
);

  
    // const response = await axios.post(
    //   process.env.BASE_URL + "/pythonapi/api/compress-image",

    //   formdata,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );

    // if (response.data.success === "ok") {
    //   let downloadLink;
    //   const imagesData: data[] = response.data.data;

    //   if (response.data.data.length > 1) {
    //     const uuid = uuidv4();
    //     const zip = new AdmZip();
    //     // const bufferArray = imagesData.map((piece: data) => {
    //     //   return Buffer.from(piece.base64, "base64");
    //     // });

    //     imagesData.map(async (piece: data) => {
    //       await zip.addFile(
    //         timestamp + "-" + piece.filename,
    //         Buffer.from(piece.base64, "base64")
    //       );
    //     });
    //     const path = `./public/compressed/${uuid}-${timestamp}.zip`;
    //     downloadLink = `/compressed/${uuid}-${timestamp}.zip`;

    //     zip.writeZip(path);
    //   } else {
    //     const buffer = Buffer.from(imagesData[0].base64, "base64");
    //     await fs.promises.writeFile(
    //       "./public/compressed/" + timestamp + "-" + imagesData[0].filename,
    //       buffer
    //     );
    //     downloadLink = "/compressed/" + timestamp + "-" + imagesData[0].filename;
    //   }

    //   return NextResponse.json(
    //     {
    //       success: "ok",
    //       link: downloadLink,
    //     },
    //     {
    //       status: 200,
    //     }
    //   );
    // }
    // return NextResponse.json(
    //   { error: "something went wrong" },
    //   {
    //     status: 500,
    //   }
    // );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}


async function compress(quality:number,inputFile:File,type:string){
  let imageBuffer:Buffer | undefined; 
  switch(type){
    case "jpeg":
      imageBuffer = await sharp(Buffer.from(await inputFile.arrayBuffer()))
  .jpeg({ quality: quality }) // Adjust the quality level as needed
  .toBuffer();
     break;
   case "png":
   
      imageBuffer = await sharp(Buffer.from(await inputFile.arrayBuffer()))
  .png({ quality: quality }) // Adjust the quality level as needed
  .toBuffer();
    break;
   
   case "tiff":
      imageBuffer = await sharp(Buffer.from(await inputFile.arrayBuffer()))
  .tiff({ quality: quality }) // Adjust the quality level as needed
  .toBuffer();
    break;
    case "avif":
      imageBuffer = await sharp(Buffer.from(await inputFile.arrayBuffer()))
  .avif({ quality: quality }) // Adjust the quality level as needed
  .toBuffer();
    break;
    
  
  }

 return imageBuffer

}