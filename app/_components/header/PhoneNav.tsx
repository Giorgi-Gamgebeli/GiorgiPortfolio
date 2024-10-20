"use client";

import MotionComponent from "../MotionComponent";
import Nav from "./Nav";
import Socials from "./Socials";

type PhoneNavTypes = {
  isPhoneNavOpen: boolean;
  setIsPhoneNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function PhoneNav({ isPhoneNavOpen, setIsPhoneNavOpen }: PhoneNavTypes) {
  return (
    <MotionComponent
      className={`flex items-center justify-between md:hidden ${isPhoneNavOpen ? "" : "pointer-events-none"}`}
      initial={{
        opacity: 0,
        height: 0,
        padding: 0,
      }}
      animate={{
        opacity: isPhoneNavOpen ? 1 : 0,
        height: isPhoneNavOpen ? "auto" : 0,
        padding: isPhoneNavOpen ? "1rem" : 0,
      }}
      dontDisableFramerForMobile
    >
      <Nav phoneNav setIsPhoneNavOpen={setIsPhoneNavOpen} />
      <Socials phoneSocials />
    </MotionComponent>
  );
}

export default PhoneNav;
