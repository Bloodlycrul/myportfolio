"use client";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export default function ThemeContext({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [currentWidth, setCurrentWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [mounted, setMounted] = useState<boolean>(false);

  const handleResize = () => {
    window.addEventListener("resize", () => {
      setCurrentWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handleResize();
    setMounted(true);
    // clean up functions to reduce the memory leaking
    return window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return false;

  return (
    <button
      className={cn("", className)}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MdDarkMode size={currentWidth <= 881 ? 15 : 30} />
      ) : (
        <MdOutlineLightMode size={currentWidth <= 881 ? 15 : 30} />
      )}
    </button>
  );
}
