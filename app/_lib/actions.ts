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
        origin: "https://giorgi-webdev-portfolio.vercel.app",
      },
      body: JSON.stringify({
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_KEY as string,
        template_params: {
          from_name: name,
          to_name: "Giorgi",
          from_email: email,
          to_email: "giorgi.gamertube@gmail.com",
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
