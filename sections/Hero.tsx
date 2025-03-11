"use client";

import Image from "next/image";
import assets from "@/assets/profile_img.png";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ArrowUpRight } from "lucide-react";
import AnimatedDot from "@/components/animated-dot";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Hero() {
  return (
    <div className="w-full px-6 md:px-[12%] py-12 mt-16">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 dark:border-stone-700 border-2 rounded-xl p-8 dark:bg-[#212121] max-w-3xl mx-auto hover:bg-gray-100/50 transition-all duration-300 shadow-lg hover:shadow-xl">
        <div className="flex flex-col items-center gap-6">
          <div className="group">
            <Image
              src={assets}
              alt="Profile picture"
              className="rounded-full w-32 md:w-36 shadow-xl ring-2 ring-offset-4 ring-gray-200 dark:ring-stone-700 dark:ring-offset-[#212121] transition-all duration-300 group-hover:scale-105 group-hover:ring-offset-8"
              priority
            />
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-colors">
            <AnimatedDot />
            <span className="text-sm text-green-600 dark:text-green-400 font-medium whitespace-nowrap">
              Available to work
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 text-center md:text-left space-y-3">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="text-2xl md:text-2xl font-extrabold hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer relative group">
                  @lauchydev
                  <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gray-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem
                  onClick={() =>
                    window.open("https://github.com/lauchydev", "_blank")
                  }
                  className="cursor-pointer flex items-center justify-between"
                  inset
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    window.open("https://linkedin.com/in/lauchydev", "_blank")
                  }
                  className="cursor-pointer flex items-center justify-between"
                  inset
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 tracking-tight">
              Software Developer
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-mono text-sm md:text-base">
              3rd year Computer Science student
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start pt-1">
            <Button
              variant="default"
              size="lg"
              className="flex items-center gap-2 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1L2FNI0DpQhISbGqRWiUZIM1H-dHPL8eo/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Download Resume <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
