import React from "react";
import { Orbitron } from "next/font/google";
import SocialSharing from "./SocialSharing";

const orbit = Orbitron({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const Main = () => {
  return (
    <div className="">
      <div className={`${orbit.className} text-7xl`}>Gaurav Rana</div>
      <div className="md:mt-6 text-[19px] text-[#555555] ">
        Hello, I am <span className="font-extrabold"> Gaurav Rana</span>, a
        <span className="font-extrabold leading-4">
          {" "}
          Full Stack Web Developer.
        </span>{" "}
        <br />
        <br />
        Passionate about building dynamic and responsive web applications, I
        bring a strong commitment to continuous learning and improvement in the
        field of web development. Explore my work and join me on this exciting
        journey!
      </div>
      <div className="my-12 h-full">
        <SocialSharing />
      </div>
      <div className=" flex flex-col gap-3 md:mt-6 text-[19px] text-[#555555] ">
        <div className="">
          I am a{" "}
          <span className="font-extrabold"> dedicated web developer </span> with
          a <span className="font-extrabold">strong commitment </span> to
          enhancing my skills through the creation of diverse web development
          projects. My portfolio includes successfully completed projects
          utilizing a variety of technologies, including{" "}
          <span className="font-extrabold">
            HTML, CSS, Tailwind CSS, JavaScript, ReactJS, NodeJS, and ExpressJS.
          </span>
        </div>
        <div>
          My{" "}
          <span className="font-extrabold "> passion for web development </span>
          motivates me to continuously learn and grow, ensuring that I stay at
          the forefront of industry trends and best practices. In addition to my
          development work.
        </div>
        <div>
          I am eager to bring my{" "}
          <span className="font-extrabold"> expertise and enthusiasm</span> to
          new challenges and opportunities in the field of web development.
        </div>
      </div>
    </div>
  );
};

export default Main;
