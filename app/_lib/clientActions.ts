"use client";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const res = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
      {
        from_name: name,
        to_name: "Giorgi",
        from_email: email,
        to_email: "giorgi.gamertube@gmail.com",
        message: message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_KEY as string,
    );

    if (res.status !== 200) throw new Error("Email was not send");

    toast.success("I received your message, will contact you soon!");
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong, please try again later");
  }
}
