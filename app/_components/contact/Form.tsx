"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import Input from "./Input";
import Textarea from "./Textarea";
import useSendEmail from "@/app/_hooks/useSendEmail";

export type OnSubmitTypes = {
  name: string;
  email: string;
  message: string;
};

function Form() {
  const { register, handleSubmit } = useForm<OnSubmitTypes>();

  const [loading, setLoading] = useState(false);
  const { sendEmail } = useSendEmail(setLoading);

  function onSubmit(FormValues: OnSubmitTypes) {
    setLoading(true);
    sendEmail(FormValues);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 md:mt-12 flex flex-col gap-4 font-medium md:gap-8"
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

      <button
        type="submit"
        className="w-fit rounded-xl border border-transparent bg-gray-200 px-8 py-3 font-bold shadow-md outline-none transition hover:border-gray-400 dark:border-none dark:bg-darkTertiary dark:text-white dark:shadow-sm dark:shadow-darkPrimary dark:hover:shadow-md hover:dark:shadow-darkPrimary"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
}

export default Form;
