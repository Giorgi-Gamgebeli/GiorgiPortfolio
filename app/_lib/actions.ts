"use server";

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        origin: process.env.ORIGIN as string,
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE as string,
        template_id: process.env.EMAILJS_TEMPLATE as string,
        user_id: process.env.EMAILJS_KEY as string,
        template_params: {
          from_name: name,
          to_name: "Giorgi",
          from_email: email,
          message: message,
        },
      }),
    });

    if (res.status !== 200) throw new Error("Email was not send");

    return { ok: true };
  } catch (err) {
    console.error(err);
    return { ok: false };
  }
}
