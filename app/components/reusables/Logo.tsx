import Image from "next/image";

function Logo() {
  return (
    <div className="w-40 h-20 relative">
      <Image
        src={"/assets/transparent-logo.png"}
        alt="imagebgremover.io"
        fill={true}
      />
    </div>
  );
}

export default Logo;
