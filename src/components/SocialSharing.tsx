import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import gauravImage from "../../public/gaurav.jpg";
import Link from "next/link";

const SocialSharing = () => {
  return (
    <div className="flex items-center gap-7 text-[#555555]">
      <div className="relative w-[100px] h-[100px]">
        <Image
          className="rounded-full blackWhite object-cover hover:opacity-0 absolute transition-opacity ease duration-500 "
          src={gauravImage}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className="rounded-full opacity-0 hover:opacity-100 absolute "
          src={gauravImage}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col gap-3 items-start">
        <Link href={"https://www.linkedin.com/in/gaurav-rana-735006264/"}>
          <div className="flex gap-3 items-center">
            <FaLinkedin color="#555555" className="" size={25} />
            <p>170 followers on linkedin</p>
          </div>
        </Link>
        <Link href={"https://github.com/Bloodlycrul"}>
          <div className="flex gap-3 items-center">
            <FaGithub color="#555555" size={25} />
            <p>17 repository on github</p>
          </div>
        </Link>
        <Link href={"https://www.instagram.com/gaurav_rana_08/"}>
          <div className="flex gap-3 items-center">
            <FaInstagramSquare color="#555555" size={25} />
            <p>478 followers on Instagram</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialSharing;
