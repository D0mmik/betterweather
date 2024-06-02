"use client";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Searchbar() {
  const [formState, action] = useFormState(actions.goToWeather, {
    message: "",
  });

  return (
    <div className="flex h-25 items-end justify-around w-[90%]">
      <div className="mt-2 flex w-full flex-row justify-between max-sm:mb-0 max-sm:flex-col">
        <div className="w-full hidden items-center justify-between mt-3 max-sm:flex">
          <Link
            className="w-7/12 flex-row items-center justify-start hidden max-sm:flex"
            href="/dashboard"
          >
            <Image src="/LogoApp.svg" alt="" width={50} height={50} />
            <h1 className="m-3 text-2xl font-medium">Caucane</h1>
          </Link>
          <Image src="/BurgerMenu.svg" alt="" width={50} height={50} />
        </div>
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
