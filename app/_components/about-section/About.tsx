import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import BentoGrid from "./BentoGrid";
import BentoGridMobile from "./BentoGridMobile";

function About() {
  return (
    <Section idName="About">
      <SectionSubText>INTRODUCTION</SectionSubText>
      <SectionHeadText>Who am i.</SectionHeadText>

      <BentoGrid />
      <BentoGridMobile />
    </Section>
  );
}

export default About;
