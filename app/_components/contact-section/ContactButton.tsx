"use client";

import { useFormStatus } from "react-dom";

type ContactButtonTypes = {
  children: React.ReactNode;
  type: "submit" | "button";
  pendingLabel?: string;
};

function ContactButton({ children, type, pendingLabel }: ContactButtonTypes) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      className="w-fit rounded-xl border border-transparent bg-gray-200 px-8 py-3 font-bold shadow-md outline-none transition hover:border-gray-400 dark:border-none dark:bg-darkTertiary dark:text-white dark:shadow-sm dark:shadow-darkPrimary dark:hover:shadow-md hover:dark:shadow-darkPrimary"
    >
      {pending && type !== "button" ? pendingLabel : children}
    </button>
  );
}

export default ContactButton;
