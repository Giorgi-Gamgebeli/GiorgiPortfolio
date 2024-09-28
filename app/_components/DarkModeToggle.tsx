"use client";
import useDarkModeContext from "../_context/useDarkModeContext";
import { useEffect } from "react";
import sun from "@/public/sun.png";
import moon from "@/public/moon.png";
import Image from "next/image";

type DarkModeToggleTypes = {
  display?: boolean;
};

function DarkModeToggle({ display = true }: DarkModeToggleTypes) {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      className={`h-14 w-14  cursor-pointer overflow-hidden rounded-md p-2 transition-all duration-300 ${
        display ? "" : "hidden"
      }`}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Image
          src={sun}
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="image of sun"
        />
      ) : (
        <Image
          src={moon}
          placeholder="blur"
          quality={80}
          className="object-cover object-top"
          alt="image of moon"
        />
      )}
    </button>
  );
}

export default DarkModeToggle;
