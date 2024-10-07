"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import FlexBox from "../FlexBox";
import MotionComponent from "../MotionComponent";
import { useRef } from "react";
import { technologies } from "@/app/_utils/constants";

function TechStack() {
  const parentRef = useRef<HTMLDivElement | null>(null);

  return (
    <FlexBox reactRef={parentRef} className="h-full w-full flex-wrap gap-5">
      {technologies.map(({ name, iconify, color }) => (
        <MotionComponent
          drag
          whileDrag={{ scale: 1.1 }}
          dragConstraints={parentRef}
          // dragSnapToOrigin={true}
          key={name}
          className={`flex cursor-grabbing flex-col items-center justify-center gap-1 text-gray-600 hover:cursor-grab ${color}`}
        >
          <Icon icon={iconify} className="size-14" />
          <p className="text-xl font-medium">{name}</p>
        </MotionComponent>
      ))}
    </FlexBox>
  );
}

export default TechStack;
