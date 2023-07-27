import Image from "next/image";

function Logo() {
  return (
    <div className="relative bg-gray-300 rounded ">
      <Image
        src={"/assets/logo-svg.svg"}
        alt="imagebgremover.io"
        width={220}
        height={150}
      />
    </div>
  );
}

export default Logo;
