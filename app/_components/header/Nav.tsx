"use client";

import { useActiveSectionContext } from "../../_context/ActiveSectionContext";
import Link from "next/link";
import MotionComponent from "../MotionComponent";
import { navLinks } from "@/app/_utils/constants";

type NavProps = {
  setIsPhoneNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  phoneNav?: boolean;
};

function Nav({ setIsPhoneNavOpen, phoneNav }: NavProps) {
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
            key={link}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative"
          >
            <Link
              href={`#${link}`}
              className={`block px-3 py-2 transition hover:text-gray-950 dark:hover:text-white ${activeSection === link && "text-gray-950 dark:text-white"}`}
              onClick={() => {
                setActiveSection(link);
                setTimeOfLastClick(Date.now());

                if (!setIsPhoneNavOpen) return;
                setIsPhoneNavOpen(false);
              }}
            >
              {link[0].toUpperCase() + link.slice(1)}

              {link === activeSection && (
                <MotionComponent
                  as="span"
                  className="absolute inset-0 -z-10 h-full rounded-full bg-gray-100 dark:bg-[#0b122cde]"
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
