"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import EarthCanvas from "./EarthCanvas";
import { slideIn } from "../../_utils/motion";
import Section from "../Section";

function Contact({ children }: { children: React.ReactNode }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wek805l",
        "template_ei3drs9",
        {
          from_name: form.name,
          to_name: "Giorgi",
          from_email: form.email,
          to_email: "giorgi.gamertube@gmail.com",
          message: form.message,
        },
        "R-LTJY41T67dTMuFZ",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong");
        },
      );
  }

  return (
    <Section idName="Contact">
      <div className="relative z-20 flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div
          variants={slideIn(["left", "tween", 0.2, 1])}
          className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        >
          <p className="xs:text-[20px] text-[16px] font-medium text-[#dfd9ff] sm:text-[26px] lg:text-[30px] lg:leading-[40px]">
            Get in touch
          </p>
          <h3 className="xs:text-[40px] text-[30px] font-black text-white sm:text-[50px] md:text-[60px]">
            Contact.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-darkTertiary placeholder:text-darkSecondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-darkTertiary placeholder:text-darkSecondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-darkTertiary placeholder:text-darkSecondary resize-none rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
              />
            </label>

            <button
              type="submit"
              className="bg-darkTertiary shadow-darkPrimary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn(["right", "tween", 0.2, 1])}
          className="z-10 h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
        {children}
      </div>
    </Section>
  );
}

export default Contact;
