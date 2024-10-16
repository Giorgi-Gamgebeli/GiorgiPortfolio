import MotionComponent from "../MotionComponent";

function Heading() {
  return (
    <MotionComponent
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="flex flex-col gap-6 md:gap-4 lg:gap-8 xl:gap-10"
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
  );
}

export default Heading;
