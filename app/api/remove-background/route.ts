import axios from "axios";
import { NextResponse } from "next/server";

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
      process.env.BASE_URL + "/api/remove-background",
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.success === "ok") {
      const uuid = uuidv4();
      const zip = new AdmZip();
      const imagesData: data[] = response.data.data;
      // const bufferArray = imagesData.map((piece: data) => {
      //   return Buffer.from(piece.base64, "base64");
      // });

      imagesData.map(async (piece: data) => {
        await zip.addFile(
          timestamp + "-" + piece.filename,
          Buffer.from(piece.base64, "base64")
        );
      });
      const path = `./public/bgRemoved/${uuid}-${timestamp}.zip`;
      const downloadLink = `/bgRemoved/${uuid}-${timestamp}.zip`;

      await zip.writeZip(path);

      // const filenames = imagesData.map(
      //   (piece: data) => timestamp + "-" + piece.filename
      // );
      // filenames.map(async (filename: string) => {
      //   return bufferArray.map(
      //     async (
      //       buffer:
      //         | string
      //         | NodeJS.ArrayBufferView
      //         | Iterable<string | NodeJS.ArrayBufferView>
      //         | AsyncIterable<string | NodeJS.ArrayBufferView>
      //         | Stream
      //     ) =>
      //       await fs.promises.writeFile(
      //         "./public/bgRemoved/" + timestamp + "-" + filename,
      //         buffer
      //       )
      //   );
      // });
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
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
