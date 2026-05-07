import { Icon } from "@iconify/react";
import MotionComponent from "../MotionComponent";
import { MotionProps } from "framer-motion";

type BentoGridCellProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  icon?: string;
  variant?: "secondary" | "primary" | "angry";
} & MotionProps;

function BentoGridCell({
  children,
  className,
  id,
  icon,
  variant = "secondary",
  ...rest
}: BentoGridCellProps) {
  const isPrimary = variant === "primary";

  return (
    <MotionComponent
      as="p"
      id={`${id}`}
      className={`group relative block h-full overflow-hidden rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${
        isPrimary
          ? "border-blue-500/30 bg-blue-500/5 shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] dark:border-blue-500/20 dark:bg-black-200"
          : "border-slate-200/50 bg-white shadow-sm dark:border-white/10 dark:bg-black-100"
      } ${className}`}
      {...rest}
    >
      {/* Background Decor */}
      <span
        id={`${id}-noise`}
        className="pointer-events-none absolute inset-0 opacity-0"
      />
      <span
        id={`${id}-scanline`}
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,255,255,0.05)_50%)] bg-[length:100%_4px] opacity-0 transition-opacity duration-300"
      />

      <span className="relative flex h-full flex-col gap-3">
        {icon && (
          <span
            id={`${id}-icon-container`}
            className={`relative flex size-9 min-h-9 min-w-9 items-center justify-center rounded-lg border transition-all ${
              isPrimary
                ? "border-blue-500/30 bg-blue-500/10 text-blue-500"
                : "border-slate-100 bg-slate-50/50 text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
            }`}
          >
            <Icon
              id={`${id}-icon-main`}
              icon={icon}
              className="absolute size-5"
            />
            <Icon
              id={`${id}-icon-angry`}
              icon="tabler:alert-triangle"
              className="absolute size-5 opacity-0"
            />
          </span>
        )}
        <span
          className={`block flex-1 text-[13px] font-medium leading-relaxed tracking-tight sm:text-sm ${
            isPrimary
              ? "font-semibold text-slate-800 dark:text-white"
              : "text-slate-600 dark:text-slate-200"
          }`}
        >
          {children}
          {/* Glitch Layers handled by Framer Motion */}
          <span
            id={`${id}-glitch-1`}
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full text-[#ff00c1] opacity-0 [text-shadow:-2px_0_#ff00c1]"
            aria-hidden="true"
          >
            {children}
          </span>
          <span
            id={`${id}-glitch-2`}
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full text-[#00fff9] opacity-0 [text-shadow:-2px_0_#00fff9,2px_2px_#ff00c1]"
            aria-hidden="true"
          >
            {children}
          </span>
        </span>
      </span>
    </MotionComponent>
  );
}

export default BentoGridCell;
