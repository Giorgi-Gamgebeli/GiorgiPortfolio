"use client";

import useDarkModeContext from "../_context/useDarkModeContext";
import { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import MotionComponent from "./MotionComponent";

type DarkModeToggleTypes = {
  display?: boolean;
};

function DarkModeToggle({ display = true }: DarkModeToggleTypes) {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <motion.button
      className={`fixed bottom-4 right-4 z-50 flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-[#fff0] hover:border-gray-600 dark:border-[#fff0] dark:hover:border-gray-400 md:bottom-10 md:right-10 ${
        display ? "" : "hidden"
      }`}
      onClick={toggleDarkMode}
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.5 }}
    >
      {isDarkMode ? (
        <MotionComponent
          animate={{ rotate: 360 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          <Icon icon="noto:sun" className="h-14 w-14" />
        </MotionComponent>
      ) : (
        <Icon
          icon="line-md:moon-filled-loop"
          className="h-14 w-14 text-darkTertiary"
        />
      )}
    </motion.button>
  );
}

export default DarkModeToggle;
