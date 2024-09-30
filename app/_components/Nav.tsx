"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import useActiveSectionContext from "../_context/useActiveSectionContext";
import Link from "next/link";

type NavLinkTypes = {
  name: "Home" | "About" | "Skills" | "Projects" | "Contact";
  hash: string;
}[];

const navLinks: NavLinkTypes = [
  {
    name: "Home",
    hash: "#Home",
  },
  {
    name: "About",
    hash: "#About",
  },
  {
    name: "Skills",
    hash: "#Skills",
  },
  {
    name: "Projects",
    hash: "#Projects",
  },
  {
    name: "Contact",
    hash: "#Contact",
  },
];

function Nav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav>
      <ul className="flex items-center gap-5 text-gray-500 dark:text-gray-500">
        {navLinks.map((link) => (
          <motion.li
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative "
          >
            <Link
              href={link.hash}
              className={clsx(
                `hover:text-gray-950 transition py-2 px-3 block dark:hover:text-white`,
                {
                  "text-gray-950 dark:text-white": activeSection === link.name,
                }
              )}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {link.name}

              {link.name === activeSection && (
                <motion.span
                  className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-[#0b122cab]"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                    duration: 1,
                  }}
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
