import Image from "next/image";
import Section from "../Section";
import homebg from "@/public/homebg.png";
import hacker from "@/public/hacker.png";
import MotionComponent from "../MotionComponent";
import TextSide from "./TextSide";

function Home() {
  return (
    <Section
      className="relative overflow-hidden pt-44"
      divClassName="grid grid-cols-1 xs:gap-10 md:gap-5 lg:gap-0 md:grid-cols-[60fr_40fr] md:grid-cols-[61fr_40fr]"
      idName="Home"
    >
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <Image
          src={homebg}
          quality={95}
          priority
          alt="background img of white waves"
          fill
          className="object-cover"
        />
      </div>

      <TextSide />

      <MotionComponent
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <Image
          src={hacker}
          alt="Image of hacker on computer"
          quality={80}
          priority
          className="row-span-2 w-full rounded-xl md:w-[90%]"
        />
      </MotionComponent>
    </Section>
  );
}

export default Home;
