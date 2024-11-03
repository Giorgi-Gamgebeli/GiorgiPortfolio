import netlifyDark from "@/public/netlifyDark.webp";
import vercelDark from "@/public/vercelDark.png";
import pizzaPhoto from "@/public/Screenshot_1.png";
import oasisPhoto from "@/public/Screenshot_2.png";
import wayBackPhoto from "@/public/Screenshot_3.png";

export const navLinks = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Skills",
    hash: "#Skills",
  },
  {
    name: "Projects",
    hash: "#Projects",
  },
  {
    name: "Contact",
    hash: "#Contact",
  },
] as const;

export const technologies = [
  {
    name: "HTML 5",
    iconify: "uiw:html5",
    color: "hover:text-[#E34F26]",
  },
  {
    name: "CSS 3",
    iconify: "simple-icons:css3",
    color: "hover:text-[#264DE4]",
  },
  {
    name: "JavaScript",
    iconify: "simple-icons:javascript",
    color: "hover:text-[#F7DF1E]",
  },
  {
    name: "TypeScript",
    iconify: "cib:typescript",
    color: "hover:text-[#3178C6]",
  },
  {
    name: "React JS",
    iconify: "cib:react",
    color: "hover:text-[#61DAFB]",
  },
  {
    name: "Next JS",
    iconify: "devicon-plain:nextjs",
    color: "hover:text-[#000]",
  },
  {
    name: "Three JS",
    iconify: "tabler:brand-threejs",
    color: "hover:text-[#000]",
  },
  {
    name: "Tailwind CSS",
    iconify: "simple-icons:tailwindcss",
    color: "hover:text-[#38B2AC]",
  },
  {
    name: "Styled Components",
    iconify: "simple-icons:styledcomponents",
    color: "hover:text-[#DB7093]",
  },
  {
    name: "Git",
    iconify: "cib:git",
    color: "hover:text-[#F05033]",
  },
  {
    name: "GitHub",
    iconify: "uiw:github",
    color: "hover:text-[#181717]",
  },
  {
    name: "Vite",
    iconify: "simple-icons:vite",
    color: "hover:text-[#F24E1E]",
  },
  {
    name: "Framer Motion",
    iconify: "tabler:brand-framer-motion",
    color: "hover:text-[#EA4C89]",
  },
  {
    name: "Supabase",
    iconify: "simple-icons:supabase",
    color: "hover:text-[#3ECF8E]",
  },
  {
    name: "React Query",
    iconify: "simple-icons:reactquery",
    color: "hover:text-[#FF4154]",
  },
  {
    name: "Redux Toolkit",
    iconify: "cib:redux",
    color: "hover:text-[#764ABC]",
  },
  {
    name: "React Router Dom",
    iconify: "simple-icons:reactrouter",
    color: "hover:text-[#CA4242]",
  },
  {
    name: "Context API",
    iconify: "fluent-mdl2:context-menu",
    color: "hover:text-[#3B82F6]",
  },
] as const;

export const projects = [
  {
    name: "Fast React Pizza",
    description:
      "Web application enabling users to order pizzas, view ingredients, and check estimated delivery times. A compact app with state managed by Redux.",
    tags: [
      {
        name: "React",
        color: "bg-blue-700",
      },
      {
        name: "Tailwindcss",
        color: "bg-green-700",
      },
      {
        name: "Redux",
        color: "bg-red-700",
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
      "Web application tailored for hotel staff to track customer payments and manage guest stays. Packed with advanced features, it's one of the most challenging projects I've built.",
    tags: [
      {
        name: "React",
        color: "bg-blue-700",
      },
      {
        name: "Styled-Components",
        color: "bg-green-700",
      },
      {
        name: "Supabase",
        color: "bg-red-700",
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
      "Don't judge this web-app visually 😅 Though visually simple, it includes authentication, authorization, email SMTP registration confirmation and git OAuth.",
    tags: [
      {
        name: "React",
        color: "bg-blue-700",
      },
      {
        name: "TypeScript",
        color: "bg-green-700",
      },
      {
        name: "Supabase",
        color: "bg-red-700",
      },
    ],
    image: wayBackPhoto,
    sourceCodeLink: "https://github.com/CodingReaper1/WayBack",
    deployedWebLink: "https://waybackk.netlify.app",
    deploymentServiceImg: netlifyDark,
  },
] as const;

export const bentoGridText = {
  "cell-1-1-3":
    "A dedicated React frontend developer with a strong background in HTML, CSS, and JavaScript. I enjoy creating responsive, interactive user interfaces that enhance the user experience. My focus is on building scalable and modern applications with the latest frontend technologies like React, Tailwind CSS, and Next.js.",

  "cell-1-3-4":
    "With no working experience yet. Learning coding and solving problems in frontend for almost a year. Continually increasing and building skillset.",

  "cell-2-1-2":
    "Building dynamic, responsive and modern single-page applications with reusable components. Using advanced features for efficient, dry, readable code.",

  "cell-2-2-3":
    "Performance optimization with lazy loading dynamic imports and image optimization for seamless UX.",

  "cell-2-3-4":
    "Developing optimized, scalable web applications. Adding smooth, engaging animations to enhance user interactions with framer motion.",

  "cell-3-1-2":
    "Journey from learning the foundations of HTML, CSS, and JavaScript, to expanding into frameworks like React.",

  "cell-3-2-4":
    "I prioritize clean, maintainable code and love incorporating animations that make interactions feel more engaging. With a keen eye on performance, I work to optimize load times and responsiveness for a seamless experience. I'm always excited to learn new techniques and push the boundaries of my knowledge!",
} as const;
