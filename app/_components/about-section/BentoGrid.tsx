import GridBox from "./GridBox";
import BentoGridCell from "./BentoGridCell";
import { bentoGridText } from "@/app/_utils/constants";

function BentoGrid() {
  return (
    <GridBox>
      <BentoGridCell
        initial={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          x: -1000,
          opacity: 0,
        }}
        id="cell-1"
      >
        {bentoGridText["cell-1"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          y: -700,
          opacity: 0,
          gridColumnStart: 3,
          gridColumnEnd: 4,
        }}
        id="cell-2"
      >
        {bentoGridText["cell-2"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{
          x: -600,
          opacity: 0,
          gridRowStart: 2,
          gridRowEnd: 3,
        }}
        id="cell-3"
      >
        {bentoGridText["cell-3"]}
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
        id="cell-4"
      >
        {bentoGridText["cell-4"]}
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
        id="cell-5"
      >
        {bentoGridText["cell-5"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{ y: 700, opacity: 0, gridRowStart: 3, gridRowEnd: 4 }}
        id="cell-6"
      >
        {bentoGridText["cell-6"]}
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
        id="cell-7"
      >
        {bentoGridText["cell-7"]}
      </BentoGridCell>
    </GridBox>
  );
}

export default BentoGrid;
