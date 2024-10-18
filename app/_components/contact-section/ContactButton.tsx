'use client'

type ContactButtonTypes = {
  children: React.ReactNode;
  type: "submit" | "button";
};

function ContactButton({ children, type }: ContactButtonTypes) {
  return (
    <button
      type={type}
      className="w-fit rounded-xl border border-transparent bg-gray-200 px-8 py-3 font-bold shadow-md outline-none transition hover:border-gray-400 dark:border-none dark:bg-darkTertiary dark:text-white dark:shadow-sm dark:shadow-darkPrimary dark:hover:shadow-md hover:dark:shadow-darkPrimary"
    >
      {children}
    </button>
  );
}

export default ContactButton;
