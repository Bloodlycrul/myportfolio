"use client";
import React, { useEffect, useState } from "react";
import { Wallpoet } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const wallpoet = Wallpoet({
  weight: "400",
  subsets: ["latin"],
});

const Upload = () => {
  const [catagories, setCategories] = useState<any>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const cat = async () => {
      const catagory = await fetch("/api/blog/getcatagories");
      const convertToJSON = await catagory.json();
      setCategories(convertToJSON);
    };
    // Adding the categories here
    cat();
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <>
      <div className="m-auto text-center mt-9 overflow-hidden">
        <h1 className={`${wallpoet.className} text-5xl`}>Upload You Blog</h1>
        {/* Input Area */}
        <div className=" mt-5 flex flex-col justify-start items-center">
          <div className="flex justify-center items-center gap-3">
            <Label className="text-white text-3xl" htmlFor="title">
              Title
            </Label>
            <Input
              name="title"
              className="w-[450px]  border border-white bottom-1"
            />
          </div>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger>Select Catagories {">"}</DropdownMenuTrigger>
              <DropdownMenuContent>
                {catagories &&
                  catagories.map((item: any) => {
                    return (
                      <DropdownMenuItem key={item.id}>
                        {item.title}
                      </DropdownMenuItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Upload;
