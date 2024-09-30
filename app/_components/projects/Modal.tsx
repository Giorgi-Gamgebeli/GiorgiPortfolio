"use client";

import {
  cloneElement,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import useCloseModal from "../../_hooks/useOutsideClick";
import { Icon } from "@iconify/react/dist/iconify.js";

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

  const { ref } = useCloseModal(close);

  if (name !== openName) return null;

  // used to avoid parent css overflow:hidden
  return (
    <div className="absolute inset-0 z-10 h-full w-full bg-[#1510304d] backdrop-blur-md transition">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5"
      >
        {cloneElement(children as React.ReactElement, {
          onClick: () => close(),
        })}

        <button
          onClick={close}
          className="flex h-14 w-14 items-center justify-center rounded-full border-none bg-black bg-none p-2 transition"
        >
          <Icon icon="ep:close-bold" className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
