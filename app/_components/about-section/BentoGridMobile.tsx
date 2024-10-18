'use server'

import BentoGridCell from "./BentoGridCell";
import FlexBox from "../FlexBox";
import { bentoGridText } from "@/app/_utils/constants";

function BentoGridMobile() {
  return (
    <FlexBox className="mx-auto my-10 flex-col gap-3 xs:my-20 xs:grid xs:grid-cols-2 xs:grid-rows-4 xs:gap-2 md:hidden">
      <BentoGridCell
        initial={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          y: "-100%",
          opacity: 0,
        }}
      >
        {bentoGridText["cell-1-1-3"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          x: "-100%",
          opacity: 0,
        }}
      >
       {bentoGridText["cell-1-3-4"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          x: "100%",
          opacity: 0,
        }}
      >
       {bentoGridText["cell-2-1-2"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          x: "-100%",
          opacity: 0,
        }}
      >
        {bentoGridText["cell-2-3-4"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          x: "100%",
          opacity: 0,
        }}
      >
         {bentoGridText["cell-3-1-2"]}
      </BentoGridCell>

      <BentoGridCell
        initial={{
          gridColumnStart: -3,
          gridColumnEnd: -1,
          y: "100%",
          opacity: 0,
        }}
      >
        {bentoGridText["cell-3-2-4"]}
      </BentoGridCell>
    </FlexBox>
  );
}

export default BentoGridMobile;
