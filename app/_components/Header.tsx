"use client";

import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Nav from "./Nav";
import ScrollFloatingAnimation from "./ScrollFloatingEffect";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header
      className="fixed z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <ScrollFloatingAnimation>
        <p className="flex items-center justify-center text-5xl">G</p>

        <Nav />

        <ul className="flex gap-5 text-xl">
          <Link target="_blank" href={""}>
            <Icon icon={"hugeicons:linkedin-01"} />
          </Link>
          <Link target="_blank" href={""}>
            <Icon icon={"hugeicons:github"} />
          </Link>
        </ul>
      </ScrollFloatingAnimation>
    </motion.header>
  );
}

export default Header;
