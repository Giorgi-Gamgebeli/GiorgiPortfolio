"use client";

import { projects } from "./Projects";
import TiltedImage from "./TiltedImage";
import FlexBox from "../FlexBox";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Modal from "./Modal";
import { motion } from "framer-motion";

type ProjectTypes = (typeof projects)[number];

function Project({
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  deployedWebLink,
  deploymentServiceImg,
}: ProjectTypes) {
  return (
    <article className="dark:bg-darkTertiary group relative mb-3 w-full overflow-hidden rounded-lg border-black/5 bg-gray-200 transition last:mb-0 dark:text-gray-200 sm:mb-8 sm:h-[30rem]">
      <div className="flex h-full flex-col gap-10 px-10 py-24 group-even:ml-auto sm:max-w-[50%] sm:pt-10">
        <h3 className="text-6xl font-semibold">{name}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-200">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2 text-3xl group-even:ml-auto">
          {tags.map((tag) => (
            <li
              className={`rounded-full px-3 py-1 text-lg uppercase ${tag.color} font-medium tracking-wider text-white`}
              key={tag.name}
            >
              #{tag.name}
            </li>
          ))}
        </ul>
      </div>

      <Modal>
        <Modal.Open opens="projectModal">
          <div className="absolute -right-40 top-8 w-[47rem] transition group-even:-left-40 group-even:right-[inital] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2">
            <TiltedImage image={image} />
          </div>
        </Modal.Open>
        <Modal.Window name="projectModal">
          <FlexBox className="gap-5">
            <motion.div>
              <Link
                target="_blank"
                className="flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black transition hover:shadow-lg"
                href={sourceCodeLink}
              >
                <Icon
                  icon={"hugeicons:github"}
                  className="text-xl text-white"
                />
              </Link>
            </motion.div>

            <motion.div>
              <Link
                target="_blank"
                className="flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-black transition hover:shadow-lg"
                href={deployedWebLink}
              >
                <Image
                  src={deploymentServiceImg}
                  alt="Website deployment service logo"
                  className="h-full w-full object-contain"
                  quality={95}
                />
              </Link>
            </motion.div>
          </FlexBox>
        </Modal.Window>
      </Modal>
    </article>
  );
}

export default Project;
