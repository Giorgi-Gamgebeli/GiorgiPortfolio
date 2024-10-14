import Image from "next/image";
import MotionComponent from "../MotionComponent";
import handwave from "@/public/handwave.svg";

function Handwave() {
  return (
    <MotionComponent
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-2"
    >
      <p>Hey, there</p>

      <MotionComponent
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
        }}
        transition={{
          duration: 1.5,
          delay: 1,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "bottom right" }}
      >
        <Image
          src={handwave}
          alt="hand waving"
          quality={60}
          priority
          className="size-10"
        />
      </MotionComponent>
    </MotionComponent>
  );
}

export default Handwave;
