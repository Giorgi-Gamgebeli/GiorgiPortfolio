import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import TechStack from "./TechStack";

function Skills() {
  return (
    <Section idName="Skills" className="relative">
      <SectionSubText>SKILLS</SectionSubText>
      <SectionHeadText>Tech Stack.</SectionHeadText>

      <p className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]">
        {/* {technologies.map(({ name }) => name)} */}
      </p>

      <TechStack />
    </Section>
  );
}

export default Skills;
