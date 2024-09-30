"use client";

import useDarkModeContext from "@/app/_context/useDarkModeContext";
import Contact from "./Contact";
import StarsCanvas from "./StarsCanvas";

function ContactWithStars() {
  const { isDarkMode } = useDarkModeContext();

  return <Contact>{isDarkMode && <StarsCanvas />}</Contact>;
}

export default ContactWithStars;
