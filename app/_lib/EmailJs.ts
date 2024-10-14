import { OnSubmitTypes } from "../_components/contact-section/Form";
import emailjs from "@emailjs/browser";

export async function sendEmailApi({ email, message, name }: OnSubmitTypes) {
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
}
