import Image from "next/image";
import Section from "../Section";
import homebg from "@/public/homebg.png";
import hacker from "@/public/hacker.png";
import MotionComponent from "../MotionComponent";
import TextSide from "./TextSide";

function Home() {
  return (
    <Section
      className="relative pt-44"
      divClassName="grid overflow-hidden grid-cols-1 xs:gap-10 md:gap-5 lg:gap-0 md:grid-cols-[62fr_38fr] lg:grid-cols-[61fr_40fr]"
      idName="Home"
    >
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <Image
          src={homebg}
          quality={90}
          alt="background img of white waves"
          fill
          priority
          className="object-cover"
          // sizes="(max-width: 450px) 80vw, (max-width: 768px) 40vw, 50vw"
          sizes="100vw"
          // loading="eager"
        />
      </div>

      <TextSide />

      <MotionComponent
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mx-auto w-full md:w-auto"
      >
        <Image
          src={hacker}
          alt="Image of hacker on computer"
          quality={40}
          // priority
          className="rounded-xl xs:max-w-[80%] sm:max-w-[70%] md:max-w-[90%]"
          sizes="(max-width: 450px) 80vw, (max-width: 768px) 40vw, 50vw"
        />
      </MotionComponent>
    </Section>
  );
}

export default Home;
