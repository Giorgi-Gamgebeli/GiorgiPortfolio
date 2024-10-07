import Section from "../Section";
import netlifyDark from "@/public/netlifyDark.webp";
import vercelDark from "@/public/vercelDark.png";
import pizzaPhoto from "@/public/Screenshot_1.png";
import oasisPhoto from "@/public/Screenshot_2.png";
import wayBackPhoto from "@/public/Screenshot_3.png";
import React from "react";
import Project from "./Project";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import FlexBox from "../FlexBox";
import MotionComponent from "../MotionComponent";
import { textVariant } from "@/app/_utils/motion";

export const projects = [
  {
    name: "Fast React Pizza",
    description:
      "Web application developed during a course, allowing users to order pizzas, view their ingredients, and check the estimated delivery time.",
    tags: [
      {
        name: "React",
        color: "bg-blue-600",
      },
      {
        name: "Tailwindcss",
        color: "bg-green-600",
      },
      {
        name: "Redux",
        color: "bg-red-600",
      },
    ],
    image: pizzaPhoto,
    sourceCodeLink: "https://github.com/CodingReaper1/FastReactPizza",
    deployedWebLink: "https://george-fast-react-pizza.vercel.app",
    deploymentServiceImg: vercelDark,
  },
  {
    name: "The Wild Oasis",
    description:
      "Web application developed during a learning course, tailored for hotel staff to efficiently track customer payments, manage guest stays, and streamline overall operations.",
    tags: [
      {
        name: "React",
        color: "bg-blue-600",
      },
      {
        name: "Styled-Components",
        color: "bg-green-600",
      },
      {
        name: "Supabase",
        color: "bg-red-600",
      },
    ],
    image: oasisPhoto,
    sourceCodeLink: "https://github.com/CodingReaper1/TheWildOasis",
    deployedWebLink: "https://george-the-wild-oasis.vercel.app",
    deploymentServiceImg: vercelDark,
  },
  {
    name: "Way Back",
    description:
      "Web-app developed entirely by me that allows users to mark their favorite spots, and help them find their way back. Easily revisit the places that matter most.",
    tags: [
      {
        name: "React",
        color: "bg-blue-600",
      },
      {
        name: "Tailwindcss",
        color: "bg-green-600",
      },
      {
        name: "Supabase",
        color: "bg-red-600",
      },
    ],
    image: wayBackPhoto,
    sourceCodeLink: "https://github.com/CodingReaper1/WayBack",
    deployedWebLink: "https://waybackk.netlify.app",
    deploymentServiceImg: netlifyDark,
  },
] as const;

function Projects() {
  return (
    <Section idName="Projects" viewThreshold={0.2}>
      <MotionComponent
        initial="hidden"
        whileInView="show"
        variants={textVariant(0.5)}
      >
        <SectionSubText>MY WORK</SectionSubText>
        <SectionHeadText>Projects.</SectionHeadText>

        <p className="max-w-2xl py-6 text-sm leading-relaxed md:text-lg">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described,
          click on image to visit code repositories and live demos. They reflect
          my abilty to solve complex problems, work with different technologies
          and manage projects effectively.
        </p>
      </MotionComponent>

      <FlexBox className="flex-col gap-10">
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} index={index} />
          </React.Fragment>
        ))}
      </FlexBox>
    </Section>
  );
}

export default Projects;
