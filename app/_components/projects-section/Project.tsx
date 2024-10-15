"use client";

import TiltedImage from "./TiltedImage";
import FlexBox from "../FlexBox";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Modal from "./Modal";
import { slideIn } from "@/app/_utils/motion";
import MotionComponent from "../MotionComponent";
import { projects } from "@/app/_utils/constants";

type ProjectTypes = (typeof projects)[number] & {
  index: number;
};

function Project({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  deployedWebLink,
  deploymentServiceImg,
  index,
}: ProjectTypes) {
  const isServiceNetlify = `${deploymentServiceImg.src}`.includes("netlify");

  return (
    <MotionComponent
      as="article"
      className="group relative mb-8 flex w-full flex-col-reverse overflow-hidden rounded-2xl border border-black/5 border-gray-300 bg-white shadow-md last:mb-0 dark:border-transparent dark:bg-darkTertiary dark:text-white dark:shadow-none md:block md:h-[22rem] md:rounded-lg lg:h-[25rem] xl:h-[30rem]"
      initial="hidden"
      whileInView="show"
      variants={slideIn([index % 2 ? "left" : "right", "tween", 0.5, 0.5])}
      viewport={{ once: true }}
    >
      <div className="flex h-full flex-col gap-4 p-6 xs:gap-10 xs:py-14 md:max-w-[50%] md:gap-4 md:p-8 md:group-even:ml-auto lg:gap-6 lg:p-10 xl:gap-10">
        <h3 className="text-4xl font-bold xs:text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed xs:text-base sm:text-lg lg:text-base">
          {description}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              className={`rounded-full px-3 py-1 text-sm font-medium uppercase tracking-wider text-white xs:text-base sm:text-lg md:text-sm lg:text-lg ${tag.color}`}
              key={tag.name}
            >
              #{tag.name}
            </li>
          ))}
        </ul>
      </div>

      <Modal>
        <Modal.Open opens="projectModal">
          <div className="transition xs:px-6 xs:pt-6 md:absolute md:-right-40 md:top-8 md:w-[32rem] md:p-0 md:group-even:-left-40 md:group-even:right-[inital] md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:-rotate-2 md:group-hover:scale-105 md:group-even:group-hover:translate-x-3 md:group-even:group-hover:translate-y-3 md:group-even:group-hover:rotate-2 lg:w-[38rem] xl:w-[47rem]">
            <TiltedImage image={image} />
          </div>
        </Modal.Open>
        <Modal.Window name="projectModal">
          <FlexBox className="gap-5">
            <MotionComponent
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              transition={{
                delay: 0.5,
                mass: 1,
                damping: 12,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Link
                target="_blank"
                className="flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white transition hover:shadow-lg dark:bg-black"
                href={sourceCodeLink}
              >
                <Icon
                  icon={"hugeicons:github"}
                  className="text-2xl dark:text-xl dark:text-white"
                />
              </Link>
            </MotionComponent>

            <MotionComponent
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.5,
                mass: 1,
                damping: 12,
                type: "spring",
                stiffness: 100,
              }}
            >
              <Link
                target="_blank"
                className="relative flex size-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white transition hover:shadow-lg dark:bg-black"
                href={deployedWebLink}
              >
                <Image
                  src={deploymentServiceImg}
                  alt="Website deployment service logo"
                  className="-z-10 h-full w-full object-contain dark:z-10"
                  quality={95}
                />

                <Icon
                  icon={
                    isServiceNetlify ? `devicon:netlify` : "logos:vercel-icon"
                  }
                  className={`absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 dark:hidden ${isServiceNetlify ? "size-10" : "size-6"}`}
                />
              </Link>
            </MotionComponent>
          </FlexBox>
        </Modal.Window>
      </Modal>
    </MotionComponent>
  );
}

export default Project;
