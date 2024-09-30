import Section from "../Section";
import netlifyLogo from "@/public/netlifyDark.webp";
import vercelDark from "@/public/Vercel.png";
import pizzaPhoto from "@/public/Screenshot_1.png";
import oasisPhoto from "@/public/Screenshot_2.png";
import wayBackPhoto from "@/public/Screenshot_3.png";
import React from "react";
import Project from "./Project";

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
    deploymentServiceImg: netlifyLogo,
  },
] as const;

function Projects() {
  return (
    <Section idName="Projects">
      <p>projects</p>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
