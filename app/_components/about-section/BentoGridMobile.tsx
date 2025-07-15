import BentoGridCell from "./BentoGridCell";
import { bentoGridText } from "@/app/_utils/constants";

function BentoGridMobile() {
  return (
    <div className="mx-auto my-10 flex flex-col gap-3 xs:my-20 xs:grid xs:grid-cols-2 xs:grid-rows-4 xs:gap-2 md:hidden">
      <BentoGridCell className="col-start-1 col-end-3">
        {bentoGridText["cell-1"]}
      </BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-2"]}</BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-3"]}</BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-4"]}</BentoGridCell>
      <BentoGridCell>{bentoGridText["cell-5"]}</BentoGridCell>
      <BentoGridCell className="-col-start-3 -col-end-1">
        {bentoGridText["cell-6"]}
      </BentoGridCell>
    </div>
  );
}

export default BentoGridMobile;
