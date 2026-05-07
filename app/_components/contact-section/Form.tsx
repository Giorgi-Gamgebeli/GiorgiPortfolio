"use client";

import toast from "react-hot-toast";
import { sendEmail } from "@/app/_lib/actions";
import React from "react";

async function clientAction(formData: FormData) {
  try {
    const res = await sendEmail(formData);

    if (res.ok) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  } catch {
    toast.error("Something went wrong, please try again later");
  }
}

function Form({ children }: Readonly<{ children: React.ReactNode }>) {
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
