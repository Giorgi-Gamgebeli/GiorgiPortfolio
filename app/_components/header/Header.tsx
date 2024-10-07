"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Nav from "./Nav";
import ScrollFloatingAnimation from "./ScrollFloatingEffect";
import { useState } from "react";
import PhoneNav from "./PhoneNav";
import Socials from "./Socials";
import FlexBox from "../FlexBox";
import MotionComponent from "../MotionComponent";

function Header() {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  return (
    <MotionComponent
      as="header"
      className="fixed z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5 }}
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
    </MotionComponent>
  );
}

export default Header;
