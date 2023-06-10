import ConvertOptions from "./components/ConvertOptions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Conversion Tool",
  description:
    "Convert Images to Any Format with Our Efficient Image Converter Tool - Seamlessly Transform Your Graphics for Web, Print, and More. Experience Easy Conversion, Versatility, and High-Quality Results. Try it Today!",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
    },
  },
};
const liClass = " m-2 ";
const h2Class = " w-full text-left text-3xl font-extrabold my-6  ";

const page = () => {
  return (
    <div className="w-11/12  flex flex-col justify-start items-center py-20 ">
      <h1 className="w-full text-center text-3xl mb-4  font-extrabold md:text-4xl">
        Convert Images In Multiple Format for Free
      </h1>
      <p className="w-11/12 md:w-3/5 text-sm mx-auto ">
        Convert Images to Multiple Formats with Our Efficient Image Converter
        Tool - Seamlessly Transform Your Graphics for Web, Print, and More.
        Experience Easy Conversion, Versatility, and High-Quality Results.
      </p>
      <p className="w-11/12 md:w-3/5 text-sm mx-auto"></p>
      <ConvertOptions />
      <article>
        <h2 className={h2Class}>How to convert </h2>
        <div>
          <ol className="list-decimal my-6">
            <li className={liClass}>
              Click on select images area above to open the file selection
              dialog box.
            </li>
            <li className={liClass}>
              Navigate to the folder on your device where the JPG images are
              located.
            </li>
            <li className={liClass}>
              Select one or multiple images by clicking on them while holding
              the Ctrl key (or Command key on Mac) to select multiple files. You
              can upload 20 files max at a time.
            </li>
            <li className={liClass}>
              Once you have selected the desired images, click on the{" "}
              <em>Open</em> or <em>Choose</em> button in the file selection
              dialog box.
            </li>
            <li className={liClass}>
              The selected images will start uploading.
            </li>
            <li className={liClass}>
              Click on Start Conversion button it to begin the conversion
              process.
            </li>
            <li className={liClass}>
              After the conversion is complete, Click on the donwload button to
              download the image or a zip file of converted images if more than
              one.
            </li>
          </ol>
        </div>

        <h2 className={h2Class}>Is it free and safe?</h2>
        <p className=" indent-3 leading-6 my-6">
          Yes, the online tool mentioned earlier is completely free for
          converting images to other format. You can use it without any charges
          or fees, ensuring a cost-effective solution for your image conversion
          needs.
          <br />
          <span className="font-medium underline inline-block my-4">
            Regarding safety and privacy:
          </span>
          <br />
          <span className="my-2 inline-block">
            <strong> Privacy:</strong> The tool does not require you to provide
            any personal information, such as your email address or account
            details. This helps protect your privacy and reduces the risk of
            your data being misused or shared without your consent.
          </span>
          <br />{" "}
          <span className="my-2 inline-block">
            <strong>Secure Connection:</strong> The tool typically operates over
            a secure connection (HTTPS), which ensures that the data you upload
            and download is encrypted and protected from interception by
            unauthorized parties. Look for the padlock icon in your
            browser&apos; s address bar to confirm the secure connection.
          </span>{" "}
          <span className="my-2 inline-block">
            <strong>Temporary File Storage:</strong> The tool may temporarily
            store your uploaded files for the purpose of conversion. However,
            reputable online tools usually have measures in place to ensure the
            secure handling and deletion of your files after a certain period.
            Check the tool&apos; s privacy policy or terms of service to
            understand their data handling practices.
          </span>
        </p>
      </article>
    </div>
  );
};

export default page;
