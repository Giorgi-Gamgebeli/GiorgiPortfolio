import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import SectionMini from "../SectionMini";
import MotionComponent from "../MotionComponent";
import { textVariant } from "@/app/_utils/motion";
import TechStack from "./TechStack";
import {
  experiencedTechnologies,
  proficiencyTechnologies,
} from "@/app/_utils/constants";
import SkillsHeading from "./SkillsHeading";

function Skills() {
  return (
    <Section idName="skills" viewThreshold={0.3}>
      <MotionComponent
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.5)}
        className="mb-10"
      >
        <SectionSubText>SKILLS</SectionSubText>
        <SectionHeadText>What can i do.</SectionHeadText>

        <SectionMini>
          Following tech stack is showcasing which technologies i have used to
          create websites.
        </SectionMini>
      </MotionComponent>

      <SkillsHeading>Proficiency.</SkillsHeading>
      <TechStack technologies={proficiencyTechnologies} />

      <SkillsHeading>Also Experience In.</SkillsHeading>
      <TechStack technologies={experiencedTechnologies} />
    </Section>
  );
}

export default Skills;
