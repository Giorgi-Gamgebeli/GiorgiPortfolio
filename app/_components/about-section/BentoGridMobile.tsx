import BentoGridCell from "./BentoGridCell";
import FlexBox from "../FlexBox";
import { bentoGridText } from "@/app/_utils/constants";

function BentoGridMobile() {
  return (
    <FlexBox className="mx-auto my-10 flex-col gap-3 xs:my-20 xs:grid xs:grid-cols-2 xs:grid-rows-4 xs:gap-2 md:hidden">
      <BentoGridCell className="col-start-1 col-end-3">
        {bentoGridText["cell-1-1-3"]}
      </BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-1-3-4"]}</BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-2-1-2"]}</BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-2-3-4"]}</BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-3-1-2"]}</BentoGridCell>
      <BentoGridCell className="-col-start-3 -col-end-1">
        {bentoGridText["cell-3-2-4"]}
      </BentoGridCell>
    </FlexBox>
  );
}

export default BentoGridMobile;
