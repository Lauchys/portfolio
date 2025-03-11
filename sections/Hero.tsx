import Image from "next/image";
import assets from "@/assets/profile_img.png";
export default function Hero() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image src={assets} alt="" className="rounded-full w-28" />
        <div className="px-3 flex flex-col ">
          <div className="mb-2">
            <h1>@lauchydev</h1>
          </div>
          <h1>Lauchlan</h1>
          <p className="text-sm text-gray-400 font-mono">
            I'm a software engineer with a passion for building web and mobile
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}
