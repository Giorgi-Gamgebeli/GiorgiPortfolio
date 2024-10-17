import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import BentoGrid from "./BentoGrid";

function About() {
  return (
    <Section idName="About">
      <SectionSubText>INTRODUCTION</SectionSubText>
      <SectionHeadText>Who am i.</SectionHeadText>

      <BentoGrid />
    </Section>
  );
}

export default About;
