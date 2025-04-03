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
    // seperating them with ids is important otherwise animation wouldnt work becouse framer doesnt support grid animations
    <MotionComponent
      id={`${id}-parent`}
      className={`relative ${className}`}
      {...rest}
    >
      <MotionComponent
        as="p"
        id={id}
        className="block h-full overflow-hidden hyphens-auto rounded-2xl border border-black/5 border-gray-300 bg-white p-4 font-normal shadow-md dark:border-transparent dark:bg-darkTertiary dark:text-white dark:shadow-none md:text-base md:leading-relaxed md:tracking-wider lg:text-lg"
        initial={{
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </MotionComponent>
    </MotionComponent>
  );
}

export default BentoGridCell;
