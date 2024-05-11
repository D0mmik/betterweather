'use client'
import {useFormState} from "react-dom"
import * as actions from "@/actions"
import Image from "next/image";
import {UserButton} from "@clerk/nextjs";

export default function Searchbar() {

  const [formState, action] = useFormState(actions.goToWeather, {message : ""});

  return (
    <div className="flex h-20 items-end justify-around w-[90%]">
      <div className="mb-2 flex w-full flex-row justify-between">
        <form action={action} className="flex w-4/5">
          <button type="submit" className="w-[10%]">
            <Image
              width="25"
              height="25"
              src="/Search.svg"
              alt="search--v1"
            />
          </button>
          <input
            name="location"
            type="text"
            placeholder="Search something here..."
            className="w-full p-2 outline-none rounded-xl"
          />
        </form>
        <div className="flex h-full flex-row items-center justify-between w-[15%]">
          <Image
            width="30"
            height="30"
            src="/Notification.svg"
            alt="appointment-reminders--v1"
          />
          <div className="bg-[#D9D9D9] rounded-full h-10 w-10 flex justify-center items-center">
            <UserButton/>
          </div>
        </div>
      </div>
    </div>
  );
}