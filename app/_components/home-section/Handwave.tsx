"use server";

import MotionComponent from "../MotionComponent";
import HandwaveIcon from "@/public/handwave.svg";

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
          rotate: [0, 20, -15, 20, -15, 20, -15, 20, -15, 20, 0],
        }}
        transition={{
          duration: 1.5,
          delay: 1,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "bottom right" }}
      >
        {/* <Image
          src={handwave}
          alt="hand waving"
          quality={0}
          width={40}
          height={40}
          // loading="eager"
        /> */}
        <HandwaveIcon height={40} width={40} area-label="hand waving" />
      </MotionComponent>
    </MotionComponent>
  );
}

export default Handwave;
