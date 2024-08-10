import React from "react";
import { Orbitron } from "next/font/google";

const orbit = Orbitron({
  weight: ["400", "600"],
  subsets: ["latin"],
});
const Work = () => {
  return (
    <div className="mt-8 md:mt- md:ml-36">
      <div className={`${orbit.className} text-7xl`}>We are Working On it</div>
    </div>
  );
};

export default Work;
