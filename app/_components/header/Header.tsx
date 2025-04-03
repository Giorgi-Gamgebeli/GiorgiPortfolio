"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Nav from "./Nav";
import ScrollFloatingAnimation from "./ScrollFloatingEffect";
import { useState } from "react";
import PhoneNav from "./PhoneNav";
import Socials from "./Socials";
import FlexBox from "../FlexBox";
import MotionComponent from "../MotionComponent";
import gIcon from "@/public/gIcon.png";
import gIconGray from "@/public/gIconGray.png";
import Image from "next/image";

function Header() {
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);

  return (
    <MotionComponent
      as="header"
      className="fixed z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
    >
      <ScrollFloatingAnimation>
        <FlexBox className="items-center justify-between">
          <Image
            src={gIcon}
            alt="icon letter G"
            className="hidden dark:block"
            priority
            height={45}
            width={48}
          />
          <Image
            src={gIconGray}
            alt="gray icon letter G"
            className="block dark:hidden"
            height={45}
            width={48}
          />

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
