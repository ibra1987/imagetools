import axios from "axios";
import { NextResponse } from "next/server";
import fs from "fs";

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
  try {
    const response = await axios.post(
      process.env.BASE_URL + "/pythonapi/api/remove-background",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.success === "ok") {
      let downloadLink;
      const imagesData: data[] = response.data.data;

      if (response.data.data.length > 1) {
        const uuid = uuidv4();
        const zip = new AdmZip();
        // const bufferArray = imagesData.map((piece: data) => {
        //   return Buffer.from(piece.base64, "base64");
        // });

        imagesData.map(async (piece: data) => {
          await zip.addFile(
            timestamp + "-" + piece.filename,
            Buffer.from(piece.base64, "base64")
          );
        });
        const path = `./public/bgremoved/${uuid}-${timestamp}.zip`;
        downloadLink = `/bgremoved/${uuid}-${timestamp}.zip`;

        zip.writeZip(path);
      } else {
        const buffer = Buffer.from(imagesData[0].base64, "base64");
        await fs.promises.writeFile(
          "./public/bgremoved/" + timestamp + "-" + imagesData[0].filename,
          buffer
        );
        downloadLink = "/bgremoved/" + timestamp + "-" + imagesData[0].filename;
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
      { error: "something went wrong" },
      {
        status: 500,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, stack:error.stack },
      {
        status: 500,
      }
    );
  }
}