"use server";

import GridBox from "./GridBox";
import BentoGridCell from "./BentoGridCell";
import { bentoGridText } from "@/app/_utils/constants";
// import { DynamicComputerCanvas } from "@/app/_utils/DynamicImporter";

function BentoGrid() {
  return (
    <GridBox className="hidden md:mx-auto md:my-20 md:grid md:h-[700px] md:w-[700px] md:grid-cols-3 md:grid-rows-3 md:gap-2 lg:h-[800px] lg:w-[800px] lg:gap-3">
      <BentoGridCell
        initial={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          x: -1000,
          opacity: 0,
        }}
        id="cell-1-1-3"
      >
        {bentoGridText["cell-1-1-3"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          y: -700,
          opacity: 0,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        }}
        id="cell-1-3-4"
      >
        {bentoGridText["cell-1-3-4"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          x: -600,
          opacity: 0,
          gridRowStart: 2,
          gridRowEnd: 3,
        }}
        id="cell-2-1-2"
      >
        {bentoGridText["cell-2-1-2"]}
      </BentoGridCell>

      <BentoGridCell
        initial={{
          x: -1000,
          opacity: 0,
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 2,
          gridRowEnd: 3,
        }}
        id="cell-2-2-3"
      >
        {/* <DynamicComputerCanvas /> */} ree
      </BentoGridCell>

      <BentoGridCell
        initial={{
          x: 700,
          opacity: 0,
          gridRowStart: 2,
          gridRowEnd: 3,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        }}
        id="cell-2-3-4"
      >
        {bentoGridText["cell-2-3-4"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{ y: 700, opacity: 0, gridRowStart: 3, gridRowEnd: 4 }}
        id="cell-3-1-2"
      >
        {bentoGridText["cell-3-1-2"]}
      </BentoGridCell>

      <BentoGridCell
        initial={{
          y: 700,
          opacity: 0,
          gridColumnStart: -3,
          gridColumnEnd: -1,
          gridRowStart: 3,
          gridRowEnd: 4,
        }}
        id="cell-3-2-4"
      >
        {bentoGridText["cell-3-2-4"]}
      </BentoGridCell>
    </GridBox>
  );
}

export default BentoGrid;
