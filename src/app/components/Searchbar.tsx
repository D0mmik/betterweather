'use client'
import {useFormState} from "react-dom"
import * as actions from "@/actions"

export default function Searchbar() {

  const [formState, action] = useFormState(actions.goToWeather, {message : ""});

  return (
    <div className="w-[90%] h-20 flex justify-around items-end">
      <div className="w-full flex flex-row mb-2 justify-between">
        <form action={action} className="w-4/5 flex">
          <button type="submit" className="w-[10%]">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios/50/search--v1.png"
              alt="search--v1"
            />
          </button>
          <input
            name="location"
            type="text"
            placeholder="Search something here..."
            className="w-full p-2 outline-none"
          />
        </form>
        <div className="w-[15%] h-full flex flex-row justify-between items-center">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios/50/000000/appointment-reminders--v1.png"
            alt="appointment-reminders--v1"
          />
          <div className="bg-[#D9D9D9] rounded-full h-10 w-10"></div>
        </div>
      </div>
    </div>
  );
}