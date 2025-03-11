import Image from "next/image";
import assets from "@/assets/profile_img.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex items-center gap-2 dark:border-stone-700 border-2 rounded-2xl p-5 dark:bg-[#151515] max-w-2xl mx-auto shadow-[0_4px_10px_rgba(0,0,0,0.5)] dark:shadow-[0_9px_20px_rgba(0,0,0,0.8)]">
        <Image src={assets} alt="" className="rounded-full w-28" />
        <div className="px-3 flex flex-col ">
          <div className="mb-1 text-lg font-bold">
            <a href="https://github.com/lauchydev">@lauchydev</a>
          </div>
          <h1>Software Devleoper</h1>
          <p className="text-sm dark:text-gray-300 text-gray-500 font-mono">
            Hey! I'm Lauchy, a passionate 3rd year Computer Science student with
            a focus on building scalable and efficient applications.
          </p>
          <div className="flex mt-4">
            <Button
              variant="default"
              size="default"
              className="flex items-center w-fit cursor-pointer "
            >
              Resume <Download />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
