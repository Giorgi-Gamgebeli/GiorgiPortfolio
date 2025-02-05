import { slideIn } from "../../_utils/motion";
import Section from "../Section";
import FlexBox from "../FlexBox";
import MotionComponent from "../MotionComponent";

import Form from "./Form";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import {
  DynamicEarthCanvas,
  DynamicStarsCanvas,
} from "../../_utils/DynamicImporter";
import FormRow from "./FormRow";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "../Button";
import Link from "next/link";

function Contact() {
  return (
    <Section idName="contact" className="relative">
      <FlexBox className="z-20 flex-col-reverse gap-10 overflow-hidden py-20 dark:text-white xl:mt-12 xl:grid xl:grid-cols-[45fr_55fr]">
        <MotionComponent
          initial="hidden"
          whileInView="show"
          variants={slideIn(["left", "tween", 0.2, 1])}
          className="rounded-2xl border border-gray-300 bg-white p-6 shadow-md dark:border-none dark:bg-black-100 dark:shadow-none md:p-8"
        >
          <SectionSubText>GET IN TOUCH</SectionSubText>
          <SectionHeadText>Contact.</SectionHeadText>

          <Form>
            <FormRow label="Your Name">
              <Input name="name" type="text" placeholder="What's your name?" />
            </FormRow>

            <FormRow label="Your Email">
              <Input
                name="email"
                type="email"
                placeholder="What's your email?"
              />
            </FormRow>

            <FormRow label="Your Message">
              <Textarea name="message" placeholder="What do you want to say?" />
            </FormRow>

            <FlexBox className="gap-2 text-xs xss:text-sm xs:gap-5 xs:text-base">
              <Button pendingLabel="Sending" type="submit">
                Send
              </Button>
              <Link href="/cv">
                <Button type="button">Checkout CV &rarr;</Button>
              </Link>
            </FlexBox>
          </Form>
        </MotionComponent>

        <MotionComponent
          initial="hidden"
          whileInView="show"
          variants={slideIn(["right", "tween", 0.2, 1])}
          className="z-10 h-[350px] cursor-grab md:h-[550px] xl:h-auto"
        >
          <DynamicEarthCanvas />
        </MotionComponent>
      </FlexBox>

      <DynamicStarsCanvas />
    </Section>
  );
}

export default Contact;
