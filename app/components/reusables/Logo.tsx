import Image from "next/image";

function Logo({color}:{color:string}) {
  return (
    <div className={"relative rounded " + color}>
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
