import { AiOutlineWarning } from "react-icons/ai";
import Upload from "../components/reusables/core-functionality/Upload";
import SideBar from "./components/SideBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Size Compressiol Tool",
  description:
    "Optimize Image Size for Improved Performance with Our Free Image Compression Tool - Enhance Website Speed and User Experience. Effortlessly Compress and Resize Images while Maintaining High Quality. Experience it Now!",
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
  const relatedTools = ["convert images", "remove background"];
  const liClass = "m-2";
  return (
    <>
      <h1 className="mt-10 mb-4 text-3xl font-extrabold ">
        Compress Image size
      </h1>
      <p className="w-11/12 md:w-3/5 text-sm mx-auto">
        Optimize Image Size for Improved Performance with Our Free Image
        Compression Tool - Enhance Website Speed and User Experience.
        Effortlessly Compress and Resize Images while Maintaining High Quality.
      </p>
      <Upload tool={"img-compressor"} />
      <div className="relative w-11/12 flex  flex-col space-x-2  justify-start items-center ">
        <div className="relative w-11/12 flex  flex-col space-x-2 md:flex-row md:justify-center md:items-start justify-start items-center ">
          <article className=" w-full md:w-4/5 flex flex-col justify-start items-center bg-white  md:border-r ">
            <h2 className="w-full text-left text-3xl font-extrabold p-4  text-gray-600 ">
              How To Use Image Our Free Image Size Compression Tool
            </h2>
            <h3 className="w-full text-left font-medium text-2xl my-4 p-2">
              How To Compress images:
            </h3>
            <div className="p-2">
              <ol className=" list-decimal">
                <li className={liClass}>
                  Begin by selecting the desired image using the file explorer
                  located above.
                </li>{" "}
                <li className={liClass}>
                  Next, choose the desired image quality level for compression.
                </li>
                <li className={liClass}>
                  Once the compression process is complete, a download button
                  will be displayed, enabling you to save the compressed image
                  to your device.
                </li>
              </ol>
            </div>
            <div className="p-2">
              <h3 className="w-full text-left font-medium text-2xl my-4 p-2">
                Is the image compression tool free of charge?
              </h3>
              <div className="px-4">
                <ul className=" list-disc">
                  <li className={liClass}>
                    <span className="font-medium ">Free of charge: </span>
                    Our tool is entirely free to use, allowing you to compress
                    your images without incurring any costs.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      No registration or email required:
                    </span>{" "}
                    Unlike many other tools, we do not require you to provide
                    any personal information, such as email addresses or
                    registration details. Simply access the tool and start
                    compressing your images immediately.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      User-friendly interface:
                    </span>{" "}
                    Our tool provides a user-friendly interface, making it easy
                    for you to select and compress your desired images quickly.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      Customizable image quality:
                    </span>{" "}
                    You have the freedom to choose the level of image quality
                    you prefer for compression. This ensures that your images
                    maintain the desired balance between file size reduction and
                    visual clarity.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">Hassle-free download:</span>{" "}
                    Once the compression process is complete, a convenient
                    download button will be presented, allowing you to save the
                    compressed image directly to your device without any
                    complications.
                  </li>
                </ul>
                <p className="my-2">
                  With our image compression tool, you can achieve optimal file
                  size reduction for your images effortlessly, without any
                  financial obligations or the need for registration.
                </p>
              </div>
            </div>
            <h3 className="w-full text-left font-medium text-2xl my-4 p-2">
              Is the image compression tool safe to use?
            </h3>
            <div>
              <p className="my-2">
                We prioritize the safety and privacy of our users files when
                using our image compression tool. Here&apos; s how we ensure a
                secure experience:
              </p>
              <div>
                <ul className=" list-disc">
                  <li className={liClass}>
                    <span className="font-medium ">No email requirement:</span>{" "}
                    Unlike some platforms that may ask for your email address,
                    we do not require any personal information, including your
                    email, to use our tool. This helps protect your privacy and
                    reduces the risk of your email being associated with the
                    compressed files.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      File deletion after 30 minutes:
                    </span>{" "}
                    Once you have uploaded and compressed your images, we
                    automatically delete the files from our servers after 30
                    minutes. This ensures that your files are not stored or
                    accessible beyond the necessary time required for the
                    compression process.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      Secure data transmission:
                    </span>{" "}
                    When you upload your images to our tool, we utilize secure
                    transmission protocols (such as HTTPS) to encrypt the data.
                    This ensures that your files are protected during the upload
                    process, minimizing the risk of unauthorized access or
                    interception.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      Regular security audits:
                    </span>{" "}
                    We conduct regular security audits and assessments to
                    identify and address any potential vulnerabilities or risks.
                    By staying proactive in maintaining the security of our
                    tool, we strive to provide a safe and reliable service to
                    our users.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      Virus and malware scanning:
                    </span>{" "}
                    As an extra precaution, we scan all uploaded files for
                    viruses and malware. This helps prevent the transmission of
                    infected files and protects the integrity of our platform
                    and users devices.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      Transparent privacy policy:{" "}
                    </span>
                    We maintain a transparent privacy policy that outlines how
                    we handle user data and files. We do not sell, share, or
                    misuse any personal information or files uploaded to our
                    platform. Your data remains confidential and is only used
                    for the purpose of compressing your images.
                  </li>
                  <li className={liClass}>
                    <span className="font-medium ">
                      User control and consent:{" "}
                    </span>
                    We believe in giving users control over their data. You have
                    full control over which images you choose to upload, and the
                    decision to compress and download the resulting files is
                    entirely yours. We do not access or use your images in any
                    way without your explicit consent.
                  </li>
                </ul>
                <p className="m-2">
                  By implementing these security measures and respecting user
                  privacy, we aim to provide a secure and trustworthy image
                  compression tool for all our users.
                </p>
              </div>
            </div>
            <div>
              <h3 className="w-full text-left font-medium text-2xl my-4 p-2">
                Why compress images?
              </h3>
              <p className="p-2 leading-6">
                Compressing images offers several benefits that make it a
                valuable practice. Firstly, compressed images have reduced file
                sizes, making them quicker to upload, download, and share over
                the internet. This leads to improved website loading times,
                better user experience, and reduced bandwidth consumption.{" "}
              </p>
              <p className="p-2 leading-6">
                Additionally, compressed images take up less storage space on
                devices, optimizing storage capacity. Moreover, compressed
                images can be beneficial for professional photographers, graphic
                designers, and content creators, as they can maintain acceptable
                image quality while reducing the overall file size, making it
                easier to store, manage, and transfer large volumes of visual
                content. Ultimately, image compression improves efficiency,
                enhances web performance, and simplifies digital content
                management.
              </p>
            </div>
          </article>
          <SideBar relatedTools={relatedTools} />
        </div>
        <span className="text-yellow-800 text-2xl">
          <AiOutlineWarning />
        </span>
        <span className="font-medium "></span>All uploaded files are deleted
        after 30 min.
      </div>
    </>
  );
}
