import { bentoGridText } from "@/app/_utils/constants";
import BentoGridCell from "./BentoGridCell";
import GridBox from "./GridBox";

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
        icon="tabler:device-laptop"
        variant="primary"
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
        icon="tabler:number-1"
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
        icon="tabler:layout-grid"
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
        icon="tabler:rocket"
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
        icon="tabler:sparkles"
      >
        {bentoGridText["cell-5"]}
      </BentoGridCell>
      <BentoGridCell
        initial={{ y: 700, opacity: 0, gridRowStart: 3, gridRowEnd: 4 }}
        id="cell-6"
        icon="tabler:road"
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
        icon="tabler:heart-code"
        variant="primary"
      >
        {bentoGridText["cell-7"]}
      </BentoGridCell>
    </GridBox>
  );
}

export default BentoGrid;
