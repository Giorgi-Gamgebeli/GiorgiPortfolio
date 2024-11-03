"use client";

import toast from "react-hot-toast";
import { sendEmail } from "@/app/_lib/actions";
import React from "react";

function Form({ children }: { children: React.ReactNode }) {
  async function clientAction(formData: FormData) {
    const res = await sendEmail(formData);
    if (res.ok)
      toast.success("I received your message, will contact you soon!");
    if (!res.ok) toast.error("Something went wrong, please try again later");
  }

  return (
    <form
      action={clientAction}
      className="mt-6 flex flex-col gap-4 font-medium md:mt-12 md:gap-8"
    >
      {children}
    </form>
  );
}

export default Form;
