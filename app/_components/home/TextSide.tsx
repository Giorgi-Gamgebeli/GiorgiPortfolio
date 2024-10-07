import Image from "next/image";
import MotionComponent from "../MotionComponent";
import handwave from "@/public/handwave.svg";

function TextSide() {
  return (
    <div className="row-span-1 flex flex-col gap-5 text-3xl font-medium tracking-wider">
      <MotionComponent
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2"
      >
        <p className="text-gray-700 dark:text-white/60">Hey, there</p>

        <MotionComponent
          // transition={{
          //   duration: 2,
          //   delay: 3,
          //   mass: 1,
          //   damping: 8,
          //   type: "spring",
          //   stiffness: 100,
          // }}

          initial={{ rotate: 0 }}
          animate={{
            rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
          }}
          transition={{
            duration: 2,
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

      <MotionComponent
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="flex flex-col gap-5 text-gray-700 dark:text-white/60"
      >
        <h1 className="text-6xl font-extrabold">
          I&apos;m{" "}
          <span className="bg-gradient-to-b from-purple-500 to-[#151070] bg-clip-text text-transparent">
            Giorgi Gamgebeli
          </span>
          <br />
          <span className="text-gray-950 dark:text-white">
            Front-end Developer
          </span>
        </h1>
        <p className="text-4xl">
          React/NextJs focused <span className="font-bold">UI</span> developer,
          <br /> currently learning NextJs.
        </p>
      </MotionComponent>
    </div>
  );
}

export default TextSide;
