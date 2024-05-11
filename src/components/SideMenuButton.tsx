"use server"
import Image from "next/image";

interface SideMenuButtonProps {
  ButtonTitle: string;
  backgroundImage: string;
}

export default async function SideMenuButton({
  ButtonTitle,
  backgroundImage,
}: SideMenuButtonProps) {
  return (
    <div className="m-4 flex w-full flex-row items-center justify-start">
      <Image width="58" height="58" src={backgroundImage} alt="" className="p-4" />
      <button className=" text-[#A6B6BF]">{ButtonTitle}</button>
    </div>
  );
}
