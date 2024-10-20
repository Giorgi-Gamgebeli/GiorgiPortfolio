"use server";

import Image from "next/image";
import MotionComponent from "../MotionComponent";
import handwave from "@/public/handwave1.png";

function Handwave() {
  return (
    <MotionComponent
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-2 pt-5"
    >
      <p>Hey, there</p>

      <MotionComponent
        initial={{ rotate: 0 }}
        animate={{
          rotate: [0, 20, -15, 20, -15, 20, -15, 20, -15, 20, 0],
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
          quality={50}
          width={40}
          priority
          loading="eager"
        />
      </MotionComponent>
    </MotionComponent>
  );
}

export default Handwave;
