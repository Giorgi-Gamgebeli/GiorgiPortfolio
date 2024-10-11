import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { projects } from "@/app/_utils/constants";

type TiltedImageTypes = {
  image: (typeof projects)[number]["image"];
};

function TiltedImage({ image }: TiltedImageTypes) {
  return (
    <Tilt tiltMaxAngleY={10} tiltMaxAngleX={10} transitionSpeed={300}>
      <Image
        src={image}
        alt="Project I worked on"
        quality={70}
        className="cursor-pointer rounded-lg shadow-sm md:rounded-t-lg md:shadow-2xl"
      />
    </Tilt>
  );
}

export default TiltedImage;
