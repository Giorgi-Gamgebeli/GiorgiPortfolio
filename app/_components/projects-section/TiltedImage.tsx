"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { projects } from "@/app/_utils/constants";

type TiltedImageProps = {
  image: (typeof projects)[number]["image"];
};

function TiltedImage({ image }: TiltedImageProps) {
  return (
    <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10} transitionSpeed={300}>
      <Image
        src={image}
        alt="Project I worked on"
        quality={90}
        sizes="(max-width: 768px) 600px, 800px"
        className="cursor-pointer rounded-lg shadow-sm md:rounded-t-lg md:shadow-2xl"
      />
    </Tilt>
  );
}

export default TiltedImage;
