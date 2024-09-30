"use client";

import {
  cloneElement,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import useCloseModal from "../_hooks/useOutsideClick";
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

  return createPortal(
    // used to avoid parent css overflow:hidden
    <div className="fixed inset-0 z-[1000] h-full w-full bg-slate-400 backdrop-blur-sm transition">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5 rounded-lg bg-slate-500 p-10 shadow-md transition"
      >
        <button
          onClick={close}
          className="h-14 w-14 rounded-full border-none bg-black bg-none p-2 transition"
        >
          <Icon icon="ep:close-bold" className="text-2xl" />
        </button>
        <div>
          {cloneElement(children as React.ReactElement, {
            onClick: () => close(),
          })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
