"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import { UserButton } from "@clerk/nextjs";
import SideMenuButton from "./SideMenuButton";
import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

export default function Searchbar() {
  const [formState, action] = useFormState(actions.goToWeather, {
    message: "",
  });
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="flex h-25 items-end justify-around w-[90%] sm:mt-8">
      <div className="mt-2 flex w-full flex-row justify-between max-sm:mb-0 max-sm:flex-col">
        <div className="w-full hidden items-center justify-between mt-3 max-sm:flex">
          <Link
            className="w-7/12 flex-row items-center justify-start hidden max-sm:flex"
            href="/dashboard"
          >
            <Image src="/LogoApp.svg" alt="" width={50} height={50} />
            <h1 className="m-3 text-2xl font-medium">Caucane</h1>
          </Link>
          <Image
            src="/BurgerMenu.svg"
            alt=""
            width={50}
            height={50}
            onClick={() => setIsSideMenuOpen(true)}
          />
        </div>
        {isSideMenuOpen && (
          <div className="bg-white h-[85%] w-1/2 fixed top-0 right-0 z-10 border-l-2 border-b-2">
            <div className="bg-[#D9D9D9] rounded-full h-10 w-10 flex justify-center items-center absolute top-0 left-0 m-6">
              <UserButton />
            </div>

            <button
              onClick={() => setIsSideMenuOpen(false)}
              className="absolute top-0 right-0 m-8"
            >
              Close
            </button>
            <div className="mt-14 flex h-full w-full flex-col items-end ">
              <div className="flex h-4/5 w-full flex-col items-center">
                <SideMenuButton ButtonTitle="Dashboard" href="dashboard" />
                <SideMenuButton ButtonTitle="Map" href="map" />
                <SideMenuButton ButtonTitle="Saved Location" href="saved" />
                <SideMenuButton ButtonTitle="Calendar" href="calendar" />
                <SideMenuButton ButtonTitle="Settings" href="settings" />
              </div>
              <div className="flex w-10/12 flex-col items-center">
                <div className="m-4 flex w-full flex-row items-center justify-start">
                  <Image
                    width="58"
                    height="58"
                    src={"/Logout.svg"}
                    alt=""
                    className="p-4"
                  />
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
        )}
        <form action={action} className="flex w-4/5 max-sm:mt-3 ">
          <button type="submit" className="w-[10%] max-sm:hidden">
            <Image width="25" height="25" src="/Search.svg" alt="search--v1" />
          </button>
          <input
            autoComplete="address-level2"
            name="location"
            type="text"
            placeholder="Search something here..."
            className="w-full p-2 outline-none rounded-xl"
          />
        </form>
        <div className="flex h-full flex-row items-center justify-between w-[15%] max-sm:hidden">
          <Image
            width="30"
            height="30"
            src="/Notification.svg"
            alt="appointment-reminders--v1"
          />
          <div className="bg-[#D9D9D9] rounded-full h-10 w-10 flex justify-center items-center">
            <UserButton />
          </div>
        </div>
      </div>
    </div>
  );
}
