import { textVariant } from "@/app/_utils/motion";
import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import BentoGrid from "./BentoGrid";
import BentoGridMobile from "./BentoGridMobile";
import MotionComponent from "../MotionComponent";

function About() {
  return (
    <Section idName="About">
      <MotionComponent
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.5)}
      >
        <SectionSubText>INTRODUCTION</SectionSubText>
        <SectionHeadText>Who am i.</SectionHeadText>
      </MotionComponent>

      <BentoGrid />
      <BentoGridMobile />
    </Section>
  );
}

export default About;
