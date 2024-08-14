import React from "react";
import { Wallpoet, Orbitron } from "next/font/google";
import { menu } from "@/app/utils/constant";
import Link from "next/link";
import ThemeContext from "../ThemeContext";

const wallpoet = Wallpoet({
  weight: "400",
  subsets: ["latin"],
});

const orbit = Orbitron({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const HeaderBlog = () => {
  return (
    <nav className="flex w-[60%] items-center justify-between m-auto">
      <Link href={"/"}>
        <div className={`${wallpoet.className} text-4xl md:text-7xl`}>G</div>
      </Link>
      <ul className="flex gap-2 md:mt-6">
        {menu &&
          menu.map((item) => {
            return (
              <Link
                className={`${orbit.className} text-[16px]`}
                key={item.id}
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}

        <ThemeContext className="ml-4" />
      </ul>
    </nav>
  );
};

export default HeaderBlog;
