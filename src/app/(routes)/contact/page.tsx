import SignupForm from "@/components/signup-form";
import { Orbitron } from "next/font/google";
import React from "react";
import { Metadata } from "next";

const orbit = Orbitron({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact Us",
  description: "This is the contact us page ",
  keywords: ["Contact Us", "Gaurav Rana Contact Us"],
  generator: "Contact Us | Gaurav Rana",
};

const Contact = () => {
  return (
    <div className="mt-8 md:mt- md:ml-36">
      <div className={`${orbit.className} text-7xl`}>Contact Me</div>
      <SignupForm />
    </div>
  );
};

export default Contact;
