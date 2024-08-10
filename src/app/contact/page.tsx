import SignupForm from "@/components/example/signup-form";
import { Orbitron } from "next/font/google";
import React from "react";

const orbit = Orbitron({
  weight: ["400", "600"],
  subsets: ["latin"],
});
const Contact = () => {
  return (
    <div className="mt-8 md:mt- md:ml-36">
      <div className={`${orbit.className} text-7xl`}>Contact Me</div>
      <SignupForm />
    </div>
  );
};

export default Contact;
