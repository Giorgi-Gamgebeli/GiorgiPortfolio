"use client";

import clsx from "clsx";
import useActiveSectionContext from "../../_context/useActiveSectionContext";
import Link from "next/link";
import MotionComponent from "../MotionComponent";

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

type NavTypes = {
  setIsPhoneNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNav?: boolean;
};

function Nav({ setIsPhoneNavOpen, phoneNav }: NavTypes) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav>
      <ul
        className={`items-center gap-5 text-gray-500 dark:text-gray-500 ${phoneNav ? "flex flex-col" : "hidden flex-row md:flex"}`}
      >
        {navLinks.map((link) => (
          <MotionComponent
            as="li"
            key={link.hash}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative"
          >
            <Link
              href={link.hash}
              className={clsx(
                `block px-3 py-2 transition hover:text-gray-950 dark:hover:text-white`,
                {
                  "text-gray-950 dark:text-white": activeSection === link.name,
                },
              )}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());

                if (!setIsPhoneNavOpen) return;
                setIsPhoneNavOpen(false);
              }}
            >
              {link.name}

              {link.name === activeSection && (
                <MotionComponent
                  as="span"
                  className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-[#0b122cab]"
                  layoutId={`${phoneNav ? "phoneActiveSection" : "activeSection"}`}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                    duration: 1,
                  }}
                />
              )}
            </Link>
          </MotionComponent>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
