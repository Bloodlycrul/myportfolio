import React from "react";
import { Wallpoet, Orbitron } from "next/font/google";
import { menu } from "@/app/utils/constant";
import Link from "next/link";
import ThemeContext from "./ThemeContext";

const wallpoet = Wallpoet({
  weight: "400",
  subsets: ["latin"],
});

const orbit = Orbitron({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-3 md:block">
      <Link href={"/"}>
        <div className={`${wallpoet.className} text-4xl md:text-7xl`}>G</div>
      </Link>
      <nav className="">
        <ul className="flex md:flex-col gap-2 md:mt-6">
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
          <div className="md:mt-3">
            <ThemeContext />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
