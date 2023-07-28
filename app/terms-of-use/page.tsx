import {Metadata} from "next";

export const metadata :Metadata = {

  title:"Terms of use- imagebgemover.com",
  description:"Review our website's terms of use to understand the rules and guidelines governing your interactions with our platform. Our terms of use outline the responsibilities of users, content usage, and legal agreements. Stay informed about your rights and obligations when using our services.",
  robots: {
   index: true,
   follow: true,
   nocache: false,
   googleBot: {
     index: true,
   },
 },
 }
function page() {
  return (
    <article className="mt-16 w-4/5 flex flex-col justify-start items-center">
      <h1 className="text-3xl ">
        Terms and Privacy Policy for imagebgremover.io:
      </h1>
      <h2 className="w-full text-left text-2xl underline p-2">
        Terms of Service:
      </h2>
      <p className="m-1">
        Welcome to imagebgremover.io! These Terms of Service (&quot;Terms&quot;)
        govern your use of our website and its associated services (collectively
        referred to as the &quot;Service&quot;).
      </p>
      <p className="m-1">
        By accessing or using the Service, you agree to be bound by these Terms.
        If you do not agree to these Terms, please refrain from using our
        Service.
      </p>
      <h3 className="text-xl w-full text-left">Use of Service:</h3>
      <ul>
        <li className="p-2">
          a. imagebgremover.io provides image tools such as image background
          removal, image compression, and image conversion free of charge.
        </li>
        <li className="p-2">
          b. You may use the Service without the need for registration or
          providing your email address.
        </li>
        <li className="p-2">
          c. By uploading an image, you confirm that you have the necessary
          rights and permissions to use and modify the image.
        </li>
        <li className="p-2">
          d. You understand and agree that the processed images will be
          automatically deleted from our servers within 30 minutes.
        </li>
      </ul>
      <h3 className="text-xl w-full text-left">Intellectual Property:</h3>
      <ul>
        <li className="p-2">
          a. The Service and all its contents, including but not limited to
          text, graphics, images, logos, icons, and software, are the property
          of imagebgremover.io or its licensors and are protected by applicable
          intellectual property laws.
        </li>
        <li className="p-2">
          b. You may not reproduce, distribute, modify, display, perform, or
          otherwise use any part of the Service without our prior written
          consent.
        </li>
      </ul>
      <h3 className="text-xl w-full text-left">Prohibited Activities:</h3>
      <ul>
        <li className="p-2">
          a. You agree not to use the Service for any unlawful or unauthorized
          purposes.
        </li>
        <li className="p-2">
          b. You shall not upload or transmit any content that infringes upon
          any intellectual property rights, privacy rights, or any other rights
          of any person or entity.
        </li>
        <li className="p-2">
          c. You shall not engage in any activity that disrupts or interferes
          with the Service, its servers, or networks.
        </li>
        <li className="p-2">
          d. You shall not attempt to gain unauthorized access to any part of
          the Service or its related systems or networks.
        </li>
      </ul>
      <h3 className="text-xl w-full text-left">Disclaimer of Warranty:</h3>
      <ul>
        <li className="p-2">
          a. The Service is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. imagebgremover.io does not guarantee that the
          Service will be error-free, uninterrupted, or completely secure.
        </li>
        <li className="p-2">
          b. We do not warrant the accuracy, completeness, or reliability of any
          content obtained through the Service.
        </li>
        <li className="p-2">
          c. You use the Service at your own risk, and imagebgremover.io shall
          not be liable for any damages resulting from your use of the Service.
        </li>
      </ul>
      <h3 className="text-xl w-full text-left">Limitation of Liability:</h3>
      <ul>
        <li className="p-2">
          a. To the maximum extent permitted by law, imagebgremover.io and its
          affiliates shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising out of or in connection
          with your use of the Service.
        </li>
        <li className="p-2">
          b. In no event shall our total liability exceed the amount you paid,
          if any, for using the Service.
        </li>
      </ul>
    </article>
  );
}

export default page;
