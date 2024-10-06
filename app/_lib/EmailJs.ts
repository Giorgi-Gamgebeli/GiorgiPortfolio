import { OnSubmitTypes } from "../_components/contact/Form";
import emailjs from "@emailjs/browser";

export async function sendEmailApi({ email, message, name }: OnSubmitTypes) {
  const res = await emailjs.send(
    "service_wek805l",
    "template_ei3drs9",
    {
      from_name: name,
      to_name: "Giorgi",
      from_email: email,
      to_email: "giorgi.gamertube@gmail.com",
      message: message,
    },
    "R-LTJY41T67dTMuFZ",
  );

  if (res.status !== 200) throw new Error("Email was not send");
}
