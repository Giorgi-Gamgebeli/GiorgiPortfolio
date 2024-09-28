"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="w-full fixed  ">
      <motion.div
        className="py-2 px-2 mt-5 mx-auto max-w-[90%] flex justify-between items-center rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] backdrop-blur-sm dark:from-[#0c122c7a] dark:to-[#0c122c8c] "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        logo
        <ul className="flex items-center gap-5">
          <li>
            <Link href={"#home"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contact</Link>
          </li>
          <DarkModeToggle />
        </ul>
        <ul className="flex text-xl gap-5">
          <Link target="_blank" href={""}>
            <Icon icon={"hugeicons:linkedin-01"} />
          </Link>
          <Link target="_blank" href={""}>
            <Icon icon={"hugeicons:github"} />
          </Link>
        </ul>
      </motion.div>
    </header>
  );
}

export default Header;
