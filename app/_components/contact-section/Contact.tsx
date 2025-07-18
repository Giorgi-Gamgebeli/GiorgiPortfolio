import { slideIn } from "../../_utils/motion";
import Section from "../Section";
import MotionComponent from "../MotionComponent";
import Form from "./Form";
import SectionHeadText from "../SectionHeadText";
import SectionSubText from "../SectionSubText";
import FormRow from "./FormRow";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "../Button";
import StarsCanvas from "./StarsCanvas";
import EarthCanvas from "./EarthCanvas";
import { Icon } from "@iconify/react/dist/offline.js";

function Contact() {
  return (
    <Section idName="contact" className="relative">
      <div className="z-20 flex flex-col-reverse gap-10 overflow-hidden py-20 dark:text-white xl:mt-12 xl:grid xl:grid-cols-[45fr_55fr]">
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

            <div className="flex gap-2 text-xs xss:text-sm xs:gap-5 xs:text-base">
              <Button pendingLabel="Sending" type="submit">
                Send
              </Button>
              <a
                href="/cv.pdf"
                download="Giorgi-Gamgebeli-CV.pdf"
                className="w-fit rounded-xl border border-transparent bg-gray-200 px-8 py-3 font-bold shadow-md outline-none transition hover:border-gray-400 dark:border-none dark:bg-darkTertiary dark:text-white dark:shadow-sm dark:shadow-darkPrimary dark:hover:shadow-md hover:dark:shadow-darkPrimary"
              >
                <Icon icon="material-symbols:download" className="text-lg" />
                Download CV
              </a>
            </div>
          </Form>
        </MotionComponent>

        <MotionComponent
          initial="hidden"
          whileInView="show"
          variants={slideIn(["right", "tween", 0.2, 1])}
          className="z-10 h-[350px] cursor-grab md:h-[550px] xl:h-auto"
        >
          <EarthCanvas />
        </MotionComponent>
      </div>

      <StarsCanvas />
    </Section>
  );
}

export default Contact;
