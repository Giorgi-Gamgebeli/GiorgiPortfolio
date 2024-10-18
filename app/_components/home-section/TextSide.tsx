"use server";

import FlexBox from "../FlexBox";
import Handwave from "./Handwave";
import Heading from "./Heading";

function TextSide() {
  return (
    <FlexBox className="flex-col text-xl font-medium tracking-wider text-gray-950/80 dark:text-white/50 xs:text-3xl sm:text-4xl md:text-2xl lg:gap-3 lg:text-3xl">
      <Handwave />

      <Heading />
    </FlexBox>
  );
}

export default TextSide;
