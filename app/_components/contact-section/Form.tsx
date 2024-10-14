"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import Input from "./Input";
import Textarea from "./Textarea";
import ContactButton from "./ContactButton";
import FlexBox from "../FlexBox";
import { sendEmailApi } from "@/app/_lib/EmailJs";

export type OnSubmitTypes = {
  name: string;
  email: string;
  message: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

function Form() {
  const { register, handleSubmit } = useForm<OnSubmitTypes>();
  const [loading, setLoading] = useState(false);

  function onSubmit(FormValues: OnSubmitTypes) {
    setLoading(true);
    sendEmailApi({ ...FormValues, setLoading });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-4 font-medium md:mt-12 md:gap-8"
    >
      <FormRow label="Your Name">
        <Input
          id="name"
          register={register}
          type="text"
          placeholder="What's your name?"
        />
      </FormRow>

      <FormRow label="Your Email">
        <Input
          id="email"
          register={register}
          type="email"
          placeholder="What's your email?"
        />
      </FormRow>

      <FormRow label="Your Message">
        <Textarea
          id="message"
          register={register}
          placeholder="What do you want to say?"
        />
      </FormRow>

      <FlexBox className="gap-2 text-xs xss:text-sm xs:gap-5 xs:text-base">
        <ContactButton type="submit">
          {loading ? "Sending..." : "Send"}
        </ContactButton>
        <a href="/GiorgiCV.pdf" download>
          <ContactButton type="button">{"Download CV"}</ContactButton>
        </a>
      </FlexBox>
    </form>
  );
}

export default Form;
