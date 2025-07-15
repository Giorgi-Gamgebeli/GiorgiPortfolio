import { MotionProps } from "framer-motion";
import MotionComponent from "../MotionComponent";

type BentoGridCellProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
} & MotionProps;

function BentoGridCell({
  children,
  className,
  id,
  ...rest
}: BentoGridCellProps) {
  return (
    <MotionComponent
      as="p"
      id={`${id}`}
      className="block h-full overflow-hidden hyphens-auto rounded-2xl border border-black/5 border-gray-300 bg-white p-4 font-normal shadow-md dark:border-transparent dark:bg-darkTertiary dark:text-white dark:shadow-none md:text-base md:leading-relaxed md:tracking-wider lg:text-lg"
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}

export default BentoGridCell;
