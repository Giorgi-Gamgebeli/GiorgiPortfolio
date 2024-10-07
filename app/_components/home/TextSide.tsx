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
          initial={{ rotate: 0 }}
          animate={{
            rotate: [-25, 0, -25, 0, -25, 0, -25, 0, -25, 0, -25, 0],
          }}
          transition={{
            duration: 2,
            delay: 3,
            mass: 1,
            damping: 8,
            type: "spring",
            stiffness: 100,
          }}
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
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-col gap-5 leading-relaxed"
      >
        <h1 className="text-6xl font-extrabold">
          I&apos;m <span className="pb-3">Giorgi Gamgebeli</span>
          <br />
          <span>Front-end Developer</span>
        </h1>
        <p className="text-4xl text-gray-700 dark:text-white/60">
          React/NextJs focused <span className="font-bold">UI</span> developer,
          <br /> currently learning NextJs.
        </p>
      </MotionComponent>
    </div>
  );
}

export default TextSide;
