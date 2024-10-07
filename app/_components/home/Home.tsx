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
      divClassName="grid grid-cols-[60fr_40fr]"
      idName="Home"
    >
      <div className="absolute inset-0 -z-10 hidden dark:block">
        <Image
          src={homebg}
          quality={95}
          priority
          alt="background img of white waves"
          fill
        />
      </div>

      <TextSide />

      <MotionComponent
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Image
          src={hacker}
          alt="Image of hacker on computer"
          quality={80}
          priority
          className="row-span-2 w-4/5 rounded-xl"
        />
      </MotionComponent>
    </Section>
  );
}

export default Home;
