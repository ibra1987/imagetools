import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/reusables/Header";
import Footer from "./components/reusables/Footer";
import { AiOutlineWarning } from "react-icons/ai";

const poppins = Poppins({ weight: ["400", "500"], subsets: ["latin"] });

export const metadata = {
  title: "Remove Image Background ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="w-full bg-gray-50 relative text-gray-500  mx-auto flex flex-col justify-between items-center min-h-screen  ">
          <Header />
          <div className="mt-16 w-full flex flex-col justify-start items-center bg-inherit">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
