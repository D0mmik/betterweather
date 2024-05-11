"use server"
import SideMenuButton from "./SideMenuButton";
import Link from "next/link";
import Image from "next/image";
import {SignedIn, SignedOut, SignInButton, SignOutButton} from "@clerk/nextjs";

export default async function SideMenu() {
  return (
    <div className="flex h-full w-full flex-col items-center font-sans font-light">
      <div className="mt-8 flex w-7/12 flex-row items-center justify-start">
        <Image src="/LogoApp.svg" alt="" width={50} height={50} />
        <Link href="/" className="m-3 text-2xl font-medium">Caucane</Link>
      </div>
      <div className="mt-14 flex h-full w-full flex-col items-end justify-between">
        <div className="flex h-full w-10/12 flex-col items-center">
          <div className=" flex flex-row items-center justify-start border-r-[1px] border-[#1F1E31] m-4 w-full">
            <Image width="58" height="58" src="/Category.svg" alt="" className="p-4" />
            <button className="">Dashboard</button>
          </div>
          <SideMenuButton ButtonTitle="Map" backgroundImage="/Activity.svg" />
          <SideMenuButton
            ButtonTitle="Saved Location"
            backgroundImage="/Heart.svg"
          />
          <SideMenuButton
            ButtonTitle="Calendar"
            backgroundImage="/Calendar.svg"
          />
          <SideMenuButton
            ButtonTitle="Settings"
            backgroundImage="/Setting.svg"
          />
        </div>
        <div className="flex w-10/12 flex-col items-center">
          <div className="m-4 flex w-full flex-row items-center justify-start">
            <Image width="58" height="58" src={"/Logout.svg"} alt="" className="p-4"/>
            <SignedOut>
              <SignInButton>
                <button className="text-[#A6B6BF]">Login</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <button className="text-[#A6B6BF]">Log out</button>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
}
