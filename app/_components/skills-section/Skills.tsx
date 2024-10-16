import Section from "../Section";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import SectionMini from "../SectionMini";
import MotionComponent from "../MotionComponent";
import { textVariant } from "@/app/_utils/motion";
import dynamic from "next/dynamic";
const DynamicTechStack = dynamic(() => import("./TechStack"), { ssr: false });

function Skills() {
  return (
    <Section idName="Skills">
      <MotionComponent
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.5)}
      >
        <SectionSubText>SKILLS</SectionSubText>
        <SectionHeadText>What can i do.</SectionHeadText>

        <SectionMini>
          Following tech stack is showcasing which technologies i have used to
          create websites. While i have experience in all of them, i have
          proficiency in HTML5, CSS3, JavaScript, TypeScript, React, Tailwind
          CSS, Framer Motion.
        </SectionMini>
      </MotionComponent>

      <DynamicTechStack />
    </Section>
  );
}

export default Skills;
