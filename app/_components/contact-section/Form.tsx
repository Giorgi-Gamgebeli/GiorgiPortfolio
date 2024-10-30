"use server";

import FormRow from "./FormRow";
import Input from "./Input";
import Textarea from "./Textarea";
import ContactButton from "./ContactButton";
import FlexBox from "../FlexBox";
import { sendEmail } from "@/app/_lib/clientActions";

function Form() {
  // async function clientAction(formData: FormData) {
  //   const res = await sendEmail(formData);
  //   if (res.status === "ok")
  //     toast.success("I received your message, will contact you soon!");

  //   if (res.status === "error")
  //     toast.error("Something went wrong, please try again later");
  // }

  return (
    <form
      action={sendEmail}
      className="mt-6 flex flex-col gap-4 font-medium md:mt-12 md:gap-8"
    >
      <FormRow label="Your Name">
        <Input name="name" type="text" placeholder="What's your name?" />
      </FormRow>

      <FormRow label="Your Email">
        <Input name="email" type="email" placeholder="What's your email?" />
      </FormRow>

      <FormRow label="Your Message">
        <Textarea name="message" placeholder="What do you want to say?" />
      </FormRow>

      <FlexBox className="gap-2 text-xs xss:text-sm xs:gap-5 xs:text-base">
        <ContactButton pendingLabel="Sending" type="submit">
          Send
        </ContactButton>
        <a href="/GiorgiCV.pdf" download>
          <ContactButton type="button">Download CV</ContactButton>
        </a>
      </FlexBox>
    </form>
  );
}

export default Form;
