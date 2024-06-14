import MotionTransition from "./transition-component";
import Image from "next/image";

const AvatarServices = () => {
  return (
    <MotionTransition
      position="right"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/services.png"
        width={300}
        height={300}
        alt=""
        className="w-[350px] h-full"
      />
    </MotionTransition>
  );
};

export default AvatarServices;
