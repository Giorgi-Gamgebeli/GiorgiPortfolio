"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Nav from "./Nav";
import ScrollFloatingAnimation from "./ScrollFloatingEffect";
import { motion } from "framer-motion";
import { useState } from "react";
import PhoneNav from "./PhoneNav";
import Socials from "./Socials";
import FlexBox from "../FlexBox";

function Header() {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  return (
    <motion.header
      className="fixed z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <ScrollFloatingAnimation>
        <FlexBox className="items-center justify-between">
          <p className="flex items-center justify-center text-5xl">G</p>
          {/* <Icon icon="token-branded:gai" className="size-10 text-white" /> */}

          <Nav />

          <Socials />

          <Icon
            icon={isPhoneNavOpen ? "ep:close-bold" : "gg:menu-round"}
            className="size-12 md:hidden"
            onClick={() => setIsPhoneNavOpen(!isPhoneNavOpen)}
          />
        </FlexBox>

        <PhoneNav
          isPhoneNavOpen={isPhoneNavOpen}
          setIsPhoneNavOpen={setIsPhoneNavOpen}
        />
      </ScrollFloatingAnimation>
    </motion.header>
  );
}

export default Header;
