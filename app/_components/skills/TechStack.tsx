"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import MotionComponent from "../MotionComponent";
import { useRef } from "react";
import {
  floatVariants,
  getRandomNumber,
  technologies,
} from "@/app/_utils/constants";
import { staggerChild } from "@/app/_utils/motion";

function TechStack() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={parentRef}
      className="grid grid-cols-2 gap-y-20 pb-20 pt-14 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      {technologies.map(({ name, iconify, color }, index) => (
        <div key={name}>
          <MotionComponent
            key={name}
            animate={floatVariants[getRandomNumber()]}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <MotionComponent
              variants={staggerChild(index * 0.25)}
              initial="hidden"
              whileInView="show"
              drag
              whileDrag={{ scale: 1.1 }}
              dragConstraints={parentRef}
              // dragSnapToOrigin={true}
              className={`flex cursor-grabbing flex-col items-center gap-1 self-start text-gray-600 hover:cursor-grab ${color}`}
            >
              <Icon icon={iconify} className="size-14" />
              <p className="text-base font-medium md:text-lg lg:text-xl">
                {name}
              </p>
            </MotionComponent>
          </MotionComponent>
        </div>
      ))}
    </div>
  );
}

export default TechStack;
