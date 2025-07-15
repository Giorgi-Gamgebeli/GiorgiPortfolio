import Section from "../Section";
import React from "react";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import MotionComponent from "../MotionComponent";
import { textVariant } from "@/app/_utils/motion";
import SectionMini from "../SectionMini";
import { projects } from "@/app/_utils/constants";
import Project from "./Project";

function Projects() {
  return (
    <Section
      divClassName="overflow-hidden"
      idName="projects"
      viewThreshold={0.2}
    >
      <MotionComponent
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.5)}
      >
        <SectionSubText>MY WORK</SectionSubText>
        <SectionHeadText>Projects.</SectionHeadText>

        <SectionMini>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described,
          <strong> click on image </strong>
          to visit code repositories and live demos. They reflect my abilty to
          solve complex problems, work with different technologies and manage
          projects effectively.
        </SectionMini>
      </MotionComponent>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
