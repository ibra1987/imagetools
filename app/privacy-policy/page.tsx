import {Metadata}  from "next"


export const metadata :Metadata = {

 title:"Privacy Policy - imagebgemover.com",
 description:"Read our comprehensive privacy policy to understand how we handle and safeguard your personal information. Your trust is our priority. Learn more.",
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
      <h1 className="text-3xl">Privacy Policy:</h1>
      <p className="m-1">
        At imagebgremover.io, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and safeguard your personal
        information when you use our website and services.
      </p>
      <span className="w-full text-left font-bold m-1">
        By using imagebgremover.io, you consent to the practices described in
        this Privacy Policy.
      </span>
      <h3 className="text-2xl w-full text-left m-1">Information We Collect:</h3>
      <ul>
        <li>
          a. Personal Information: We do not collect any personally identifiable
          information from you. No registration or email address is required to
          use our Service.
        </li>
        <li>
          b. Non-Personal Information: When you access our website, certain
          non-personal information may be collected automatically, such as your
          IP address, browser type, operating system, and usage data. This
          information is collected to analyze trends, administer the site, track
          user activities, and gather demographic information for aggregate use.
        </li>
      </ul>
      <h3 className="text-2xl w-full text-left m-1">Use of Information:</h3>
      <ul>
        <li>
          a. We do not sell, trade, or rent any of the collected information to
          third parties.
        </li>
        <li>
          b. The non-personal information we collect may be used to improve and
          enhance our website and services.
        </li>
        <li>
          c. We may use cookies or similar technologies to enhance your user
          experience and provide personalized features.
        </li>
      </ul>
      <h3 className="text-2xl w-full text-left m-1">
        Third-Party Ads and Affiliate Links:
      </h3>
      <ul>
        <li>
          a. To support the operation of our website and provide you with free
          access to our services, we may display third-party advertisements or
          include affiliate links on imagebgremover.io.
        </li>
        <li>
          b. These third-party ads or affiliate links may collect non-personal
          information about your visits to our website and other sites to
          provide targeted advertisements or recommendations that may be of
          interest to you.
        </li>
        <li>
          c. Please note that these third-party sites have their own privacy
          policies, and we do not have control over their practices. We
          encourage you to review the privacy policies of any third-party sites
          you visit.
        </li>
      </ul>
      <h3 className="text-2xl w-full text-left m-1">Data Security:</h3>
      <ul>
        <li>
          a. We take appropriate measures to protect the security of your
          information and prevent unauthorized access, disclosure, or
          alteration.
        </li>
        <li>
          b. However, please note that no method of transmission over the
          internet or electronic storage is completely secure. We cannot
          guarantee the absolute security of your data.
        </li>
      </ul>
      <h3 className="text-2xl w-full text-left m-1">Third-Party Websites:</h3>
      <ul>
        <li>
          a. Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those websites. We
          encourage you to review the privacy policies of any third-party sites
          you visit.
        </li>
      </ul>
      <h3 className="text-2xl w-full text-left m-1">
        Privacy Policy modification
      </h3>
      <ul>
        <li>
          a. We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be posted on this page with a revised
          &quot;Last Updated&quot; date.
        </li>
        <li>
          b. Your continued use of the Service after any modifications to the
          Privacy Policy signifies your acceptance of the revised Privacy
          Policy.
        </li>
      </ul>
      <h3 className="text-2xl w-full text-left m-1">Contact Us:</h3>
      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at brahim.driouch@imagebgremover.io. Please review this
        Privacy Policy periodically. By continuing to use imagebgremover.io, you
        acknowledge and agree to the terms outlined in this Privacy Policy.
        Regenerate response
      </p>
    </article>
  );
}

export default page;
