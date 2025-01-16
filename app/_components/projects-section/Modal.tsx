"use client";

import MotionComponent from "../MotionComponent";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import FlexBox from "../FlexBox";
import Image from "next/image";
import { projects } from "@/app/_utils/constants";

type ModalTypes = Pick<
  (typeof projects)[number],
  "deploymentServiceImg" | "deployedWebLink" | "sourceCodeLink"
> & {
  children: React.ReactNode;
};

function Modal({
  children,
  deploymentServiceImg,
  deployedWebLink,
  sourceCodeLink,
}: ModalTypes) {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(10);
  const isServiceNetlify = `${deploymentServiceImg.src}`.includes("netlify");
  const buttonTransition = {
    delay: 0.5,
    mass: 0.4,
    damping: 10,
    type: "spring",
    stiffness: 120,
  } as const;

  useEffect(() => {
    if (timer !== 10) return;
    const timeout = setTimeout(() => {
      setIsOpen(false);
    }, timer * 1000);

    return () => clearTimeout(timeout);
  }, [isOpen, timer]);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>

      {isOpen && (
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-[rgba(229,231,235,0.3)] backdrop-blur-md dark:bg-[rgba(21,16,48,0.3)]">
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5">
            <FlexBox className="gap-5">
              <MotionComponent
                initial={{ x: -600 }}
                animate={{ x: 0 }}
                transition={buttonTransition}
              >
                <Link
                  target="_blank"
                  className="flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white transition hover:shadow-lg dark:bg-black"
                  href={sourceCodeLink}
                >
                  <Icon
                    icon={"hugeicons:github"}
                    className="text-2xl dark:text-xl dark:text-white"
                  />
                </Link>
              </MotionComponent>

              <MotionComponent
                initial={{ y: -600 }}
                animate={{ y: 0 }}
                transition={buttonTransition}
              >
                <Link
                  target="_blank"
                  className="relative flex size-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white transition hover:shadow-lg dark:bg-black"
                  href={deployedWebLink}
                >
                  <Image
                    src={deploymentServiceImg}
                    alt="Website deployment service logo"
                    className="-z-10 h-full w-full object-contain dark:z-10"
                    quality={95}
                  />

                  <Icon
                    icon={
                      isServiceNetlify ? `devicon:netlify` : "logos:vercel-icon"
                    }
                    className={`absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 dark:hidden ${isServiceNetlify ? "size-10" : "size-6"}`}
                  />
                </Link>
              </MotionComponent>
            </FlexBox>

            <MotionComponent
              initial={{
                x: 600,
              }}
              animate={{
                x: 0,
              }}
              transition={buttonTransition}
            >
              <MotionComponent
                as="button"
                onClick={() => {
                  setIsOpen(false);
                  setTimer(10);
                }}
                className="-z-20 flex h-14 w-14 items-center justify-center rounded-full"
                initial={{
                  background: "conic-gradient(#e53e3e 100%, transparent 0)",
                }}
                animate={{
                  background: `conic-gradient(#e53e3e 0%, transparent 0)`,
                }}
                transition={{ duration: timer }}
              >
                <MotionComponent
                  as="span"
                  className="absolute h-12 w-12 rounded-full bg-white dark:bg-black"
                />
                <Icon
                  icon="ep:close-bold"
                  className="z-10 text-2xl dark:text-white"
                />
              </MotionComponent>
            </MotionComponent>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
