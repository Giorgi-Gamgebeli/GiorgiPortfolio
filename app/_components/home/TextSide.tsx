import Image from "next/image";
import MotionComponent from "../MotionComponent";
import handwave from "@/public/handwave.svg";

function TextSide() {
  return (
    <div className="row-span-1 flex flex-col gap-3 text-xl font-medium tracking-wider text-gray-950/80 dark:text-white/50 xs:text-3xl sm:gap-5 sm:text-4xl md:text-2xl lg:text-3xl">
      <MotionComponent
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2"
      >
        <p>Hey, there</p>

        <MotionComponent
          initial={{ rotate: 0 }}
          whileInView={{
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

      <MotionComponent
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="flex flex-col gap-5"
      >
        <h1 className="text-2xl font-extrabold xs:text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          I&apos;m{" "}
          <span className="bg-gradient-to-b from-purple-500 to-[#151070] bg-clip-text text-transparent">
            Giorgi Gamgebeli
          </span>
          <br />
          <span className="text-gray-950 dark:text-white">
            Front-end Developer
          </span>
        </h1>

        <p>
          React/NextJs focused <br className="block lg:hidden" /> web developer,
          <br /> currently learning NextJs.
        </p>
      </MotionComponent>
    </div>
  );
}

export default TextSide;
