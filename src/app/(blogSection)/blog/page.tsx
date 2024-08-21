import React from "react";
import BorderBeam from "@/components/magicui/border-beam";
import { Wallpoet } from "next/font/google";
import { blogData } from "@/lib/Constant";
import SingleBlogContainer from "@/components/SingleBlogContainer";

const wellport = Wallpoet({
  weight: "400",
  subsets: ["latin"],
});

const Blog = () => {
  return (
    <div className="w-2/3 m-auto mt-8">
      <div className="flex flex-col gap-3 text-center items-center justify-center">
        <h3 className="text-sm font-bold">The blog</h3>
        <h1 className={`${wellport.className} text-7xl font-bold capitalize`}>
          Writings from our team
        </h1>
        <p className="mt-2">
          The latest industry news, interview, technologies, and resources
        </p>
      </div>
      {/* Container */}
      <div className="mt-6  ">
        {/* full width Container */}

        <div
          className="w-full relative overflow-hidden rounded-xl
            block
            z-10 h-[600px] bg-[url(https://images.pexels.com/photos/8408553/pexels-photo-8408553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-no-repeat bg-center  before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-t before:from-black before:via-transparent before:to-transparent before:opacity-90 before:z-[-5]
             "
        >
          <div className="absolute bottom-6 p-4 flex flex-col gap-3">
            <span>Gaurav Rana 20 Aug 2024</span>
            <h2 className="text-5xl font-bold">UX review Presentation</h2>
            <p className="font-light">
              How do you create compelling presentation that wow your colleagues
              and impress your manager?
            </p>
            {/* pilles */}
            <div className="flex gap-3">
              <div className="border px-4 py-2 rounded-full">Design</div>
              <div className="border px-4 py-2 rounded-full">Developement</div>
              <div className="border px-4 py-2 rounded-full">Research</div>
            </div>
          </div>
          <BorderBeam borderWidth={4} size={250} duration={12} delay={9} />
        </div>
        {/* Three post container */}
        <div className="">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogData.map((blog, index) => (
                <SingleBlogContainer key={index} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
