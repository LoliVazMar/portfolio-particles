import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="bottom-0 right-0 hidden fixed md:inline-block">
      <Image
        src="/circles.png"
        width={300}
        height={300}
        alt="Circle"
        loading="eager"
        className="w-full h-full"
      ></Image>
    </div>
  );
};

export default CircleImage;
