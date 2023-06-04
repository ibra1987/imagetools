import fs from "fs";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: NextApiResponse) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get("path");
    if (path) {
      const image = fs.createReadStream("./public/uploads/" + path);

      response.setHeader("Content-Type", "application/pdf");
      response.setHeader("Content-Disposition", `attachment; filename=${path}`);
      image.pipe(response);
    }

    // return NextResponse.json(
    //   {
    //     failure: "ok",
    //     error: "something bad happened",
    //   },
    //   {
    //     status: 400,
    //   }
    // );
  } catch (error: any) {
    return NextResponse.json(
      {
        failure: "ok",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
