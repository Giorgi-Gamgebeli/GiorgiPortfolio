import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import dynamic from "next/dynamic";
const DynamicBentoGrid = dynamic(() => import("./BentoGrid"), { ssr: false });

function About() {
  return (
    <Section idName="About">
      <SectionSubText>INTRODUCTION</SectionSubText>
      <SectionHeadText>Who am i.</SectionHeadText>

      <DynamicBentoGrid />
    </Section>
  );
}

export default About;
