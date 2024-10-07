"use client";

import {
  cloneElement,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

type ModalContextTypes = {
  openName: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
};

type WindowTypes = {
  children: React.ReactNode;
  name: string;
};

type OpenTypes = {
  children: React.ReactNode;
  opens: string;
};

const ModalContext = createContext<ModalContextTypes | null>(null);

function Modal({ children }: { children: React.ReactNode }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal must be used within a ModalProvider");
  }

  return context;
}

function Open({ children, opens: opensWindowName }: OpenTypes) {
  const { open } = useModalContext();

  return cloneElement(children as React.ReactElement, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name }: WindowTypes) {
  const { openName, close } = useModalContext();

  const [timer, setTimer] = useState(10);

  useEffect(() => {
    if (name !== openName || timer !== 10) return;
    console.log(timer);
    const timeout = setTimeout(() => {
      close();
      // setTimer(10);
    }, timer * 1000);

    return () => clearTimeout(timeout);
  }, [name, openName, timer, close]);

  if (name !== openName) return null;

  return (
    <div className="absolute left-0 top-0 z-10 h-full w-full bg-[rgba(229,231,235,0.3)] backdrop-blur-md dark:bg-[rgba(21,16,48,0.3)]">
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5">
        {children}

        <motion.div
          initial={{
            x: 600,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.5,
            mass: 1,
            damping: 12,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.button
            onClick={() => {
              close();
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
            <motion.span className="absolute h-12 w-12 rounded-full bg-white dark:bg-black" />
            <Icon
              icon="ep:close-bold"
              className="z-10 text-2xl dark:text-white"
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
