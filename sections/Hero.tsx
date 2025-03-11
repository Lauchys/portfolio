"use client";

import Image from "next/image";
import assets from "@/assets/profile_img.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full px-[12%] py-10 mt-20">
      <div className="flex items-start gap-6 dark:border-stone-700 border-2 rounded-lg p-6 dark:bg-[#212121] max-w-2xl mx-auto hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm">
        <Image
          src={assets}
          alt="Profile picture"
          className="rounded-full w-28 shadow-sm"
          priority
        />
        <div className="flex flex-col justify-center py-1">
          <a
            href="https://github.com/lauchydev"
            className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            @lauchydev
          </a>
          <h1 className="text-2xl font-semibold mt-1 text-gray-800 dark:text-gray-100">
            Software Developer
          </h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-600 dark:text-green-400 font-medium">
              Available for work
            </span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 font-mono mt-1">
            3rd year Computer Science student
          </p>
          <Button
            variant="default"
            size="default"
            className="flex items-center w-fit mt-4 gap-2 hover:translate-y-[-1px] transition-transform"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1L2FNI0DpQhISbGqRWiUZIM1H-dHPL8eo/view?usp=sharing",
                "_blank"
              );
            }}
          >
            Resume <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
