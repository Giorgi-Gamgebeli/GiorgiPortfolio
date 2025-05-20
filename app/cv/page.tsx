import Image from "next/image";
import FlexBox from "../_components/FlexBox";
import Link from "next/link";
import CVh3 from "./CVh3";
import CVProjects from "./_projects/CVProjects";
import CVAside from "./_aside/CVAside";
import { Icon } from "@iconify/react/dist/iconify.js";
import CVWrapper from "./CVWrapper";

function page() {
  return (
    <CVWrapper>
      <div className="relative w-[61rem] rounded-md bg-[#1e2738] px-10 py-5">
        <Image
          height={150}
          width={150}
          src="/myimage.png"
          alt="image of me"
          className="absolute -top-[4.5rem] left-1/2 aspect-square -translate-x-1/2 rounded-full border-[10px] border-[#1e2738] object-cover"
        />
        <FlexBox className="mb-8 w-full flex-col items-center gap-4">
          <h1 className="mt-14 text-4xl font-bold tracking-widest text-white">
            GIORGI GAMGEBELI
          </h1>
          <h2 className="text-xl font-medium tracking-widest">
            JUNIOR REACTJS/NEXTJS DEVELOPER
          </h2>
        </FlexBox>

        <FlexBox className="mb-8 justify-center gap-10 border-y border-white/20 py-4 text-sm">
          <p className="flex items-center gap-2">
            <Icon icon="basil:phone-in-outline" className="size-[1.4rem]" />
            +995 599610265
          </p>

          <p className="flex items-center gap-2">
            <Icon icon="clarity:email-line" className="size-5" />
            giorgi.gamgebeli.1@btu.edu.ge
          </p>

          <Link href="/" className="flex items-center gap-2">
            <Icon icon="iconoir:language" className="size-5" />
            giorgi-webdev-portfolio.vercel.app
          </Link>
        </FlexBox>

        <div className="grid flex-1 grid-cols-[2fr_1.1fr] leading-relaxed tracking-wider">
          <FlexBox className="col-start-1 col-end-2 row-start-1 row-end-2 mr-4 flex-col border-b border-white/20 pb-6">
            <CVh3 icon="mdi:person-outline" text="ABOUT ME" />
            <p>
              I&apos;m a junior front-end developer specializing in React and
              Next.js. I have hands-on experience building modern web apps with
              HTML, CSS, JavaScript/TypeScript, and tools like Tailwind CSS. I&apos;m
              passionate about writing clean, scalable code and delivering
              polished UI experiences.
            </p>
          </FlexBox>

          <CVAside />

          <CVProjects />
        </div>
      </div>
    </CVWrapper>
  );
}

export default page;
