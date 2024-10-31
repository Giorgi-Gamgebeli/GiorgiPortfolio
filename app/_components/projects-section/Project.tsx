import TiltedImage from "./TiltedImage";
import { slideIn } from "@/app/_utils/motion";
import MotionComponent from "../MotionComponent";
import { projects } from "@/app/_utils/constants";
import Modal from "./Modal";

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
              className={`rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider text-white xs:text-base sm:text-lg md:text-sm lg:text-lg ${tag.color}`}
              key={tag.name}
            >
              #{tag.name}
            </li>
          ))}
        </ul>
      </div>

      <Modal
        sourceCodeLink={sourceCodeLink}
        deployedWebLink={deployedWebLink}
        deploymentServiceImg={deploymentServiceImg}
      >
        <div className="transition xs:px-6 xs:pt-6 md:absolute md:-right-40 md:top-8 md:w-[32rem] md:p-0 md:group-even:-left-40 md:group-even:right-[inital] md:group-hover:-translate-x-3 md:group-hover:translate-y-3 md:group-hover:-rotate-2 md:group-hover:scale-105 md:group-even:group-hover:translate-x-3 md:group-even:group-hover:translate-y-3 md:group-even:group-hover:rotate-2 lg:w-[38rem] xl:w-[47rem]">
          <TiltedImage image={image} />
        </div>
      </Modal>
    </MotionComponent>
  );
}

export default Project;
