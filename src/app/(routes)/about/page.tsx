import React from "react";
import { Orbitron } from "next/font/google";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { Metadata } from "next";

const orbit = Orbitron({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Us",
  description: "Welcome to the About Us page of the Gaurav Rana",
};
const About = () => {
  return (
    <div className="mt-8 md:mt- md:ml-36">
      <div className={`${orbit.className} text-7xl`}>About Us</div>
      <div className="md:mt-6 text-[19px] text-[#555555] ">
        Hey, I am <span className="font-extrabold"> Gaurav Rana</span>, Most
        People Know Me As a
        <span className="font-extrabold leading-4"> Rana</span> <br />
        <br />
        I`&apos;`m currently focused on enhancing my skills in{" "}
        <span className="font-extrabold"> Web Development </span> by learning
        new concepts and implementing them into real-life projects.
      </div>

      <hr className="my-6 border-solid border-1 border-black" />

      <div className=" flex flex-col gap-3 md:mt-6 text-[19px] text-[#555555] ">
        <div className="">
          I`&apos;`m extremely passionate about creating web apps. I`&apos;`ve
          always been curious about how things work behind the scenes and
          whether my ideas would be successful. So far, I have acquired
          knowledge in HTML, CSS, JavaScript, Tailwind CSS, NodeJS, and ReactJS.
        </div>
        <div>
          Although I have many ideas, I believe there is always more to learn.
          Currently, I am applying what I have learned to develop web apps.
        </div>
        <hr className="my-6 border-solid border-1 border-black" />
        <div>
          I have learned{" "}
          <span className="font-extrabold"> full stack web development</span>{" "}
          and am currently focused on enhancing my skills. While I have a basic
          understanding of backend development, I excel in frontend development
          and have strong knowledge in{" "}
          <span className="font-extrabold"> JavaScript and ReactJS.</span>
        </div>
        <div>
          At present, my primary focus is on learning Web Development. I hope
          you will join me on this journey and witness my growth.
        </div>
      </div>
      <div className="flex gap-3 mt-10 w-full flex-wrap">
        {/* Social media Share Link */}
        <Link href={"https://www.linkedin.com/in/gaurav-rana-735006264/"}>
          <div className="flex  md:w-full items-center gap-1 border-2 border-black  p-4 rounded-xl ">
            <FaLinkedin />
            Linkedln
            <GoArrowUpRight />
          </div>
        </Link>
        <Link href={"https://github.com/Bloodlycrul"}>
          <div className="flex 	md:w-full items-center gap-1 border-2 border-black p-4 rounded-xl">
            <FaGithub />
            Github
            <GoArrowUpRight />
          </div>
        </Link>
        <Link href={"https://www.instagram.com/gaurav_rana_08/"}>
          <div className="flex 	md:w-full items-center gap-1 border-2 border-black p-4 rounded-xl">
            <FaInstagramSquare />
            Instagram
            <GoArrowUpRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
