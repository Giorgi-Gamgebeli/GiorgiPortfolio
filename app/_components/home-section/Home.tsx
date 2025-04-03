import Image from "next/image";
import Section from "../Section";
import homeLight from "@/public/homeLight.jpg";
import homeDark from "@/public/homeDark.png";
import MotionComponent from "../MotionComponent";
import TextSide from "./TextSide";

function Home() {
  return (
    <Section
      className="relative bg-gray-50 pt-44 dark:bg-transparent 2xl:pt-64"
      divClassName="grid overflow-hidden grid-cols-1 xs:gap-10 md:gap-5 lg:gap-0 md:grid-cols-[62fr_38fr] lg:grid-cols-[61fr_40fr]"
      idName="home"
    >
      <TextSide />

      <MotionComponent
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="mx-auto w-full md:w-auto"
      >
        <Image
          src={homeLight}
          alt="Image of hacker on computer"
          quality={90}
          priority
          className="rounded-xl dark:hidden xs:max-w-[80%] sm:max-w-[70%] md:max-w-[80%]"
          sizes="(max-width: 450px) 400px, (max-width: 768px) 360px, 400px"
          loading="eager"
        />
        <Image
          src={homeDark}
          alt="Image of hacker on computer"
          quality={90}
          priority
          className="hidden rounded-xl dark:block xs:max-w-[80%] sm:max-w-[70%] md:max-w-[80%]"
          sizes="(max-width: 450px) 400px, (max-width: 768px) 360px, 400px"
          loading="eager"
        />
      </MotionComponent>
    </Section>
  );
}

export default Home;
