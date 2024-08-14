"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Bounce, toast } from "react-toastify";
import { useTheme } from "next-themes";

export default function SignupForm() {
  const { theme } = useTheme();
  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    query: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit: any = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !userForm.firstname ||
      !userForm.lastname ||
      !userForm.email ||
      !userForm.query
    ) {
      return toast.error("Please mention all the requried ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }

    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: userForm.firstname,
        email: userForm.email,
      }),
    });

    toast.success(`${userForm.firstname} Thanks you ☺️`, {
      theme: "dark",
    });
    setUserForm({ firstname: "", lastname: "", email: "", query: "" });
  };
  return (
    <div
      className={`max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ${
        theme === "dark" ? "bg-transparent text-white " : "bg-white"
      } `}
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              onChange={handleChange}
              name="firstname"
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={userForm.firstname}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              onChange={handleChange}
              name="lastname"
              id="lastname"
              placeholder="Durden"
              type="text"
              value={userForm.lastname}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            onChange={handleChange}
            name="email"
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={userForm.email}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Your Query</Label>
          <Input
            onChange={handleChange}
            id="password"
            placeholder="Message"
            name="query"
            type="text"
            className="h-20 text-start"
            value={userForm.query}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Contact Us &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`flex flex-col space-y-2 w-full `, className)}>
      {children}
    </div>
  );
};
