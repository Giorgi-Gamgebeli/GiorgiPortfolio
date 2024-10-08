import netlifyDark from "@/public/netlifyDark.webp";
import vercelDark from "@/public/vercelDark.png";
import pizzaPhoto from "@/public/Screenshot_1.png";
import oasisPhoto from "@/public/Screenshot_2.png";
import wayBackPhoto from "@/public/Screenshot_3.png";

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

// i know this doesnt belong here but not that big deal
export const getRandomNumber = () => Math.floor(Math.random() * 2);

export const floatVariants = [
  {
    y: [0, -5, 0, 10, 0, -5, -10, -5, 0],
    rotate: [0, -5, 0, 10, 0, -5, -10, -5, 0],
  },
  {
    y: [0, 5, 0, -10, 0, 5, 10, 5, 0],
    rotate: [0, 5, 0, -10, 0, 5, 10, 5, 0],
  },
];
