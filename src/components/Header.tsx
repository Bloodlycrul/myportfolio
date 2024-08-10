import React from "react";
import { Wallpoet, Orbitron } from "@next/font/google";
import { menu } from "@/app/utils/constant";
import Link from "next/link";

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
      <div className={`${wallpoet.className} text-4xl md:text-7xl`}>G</div>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
