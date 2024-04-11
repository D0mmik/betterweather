"use client";
import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import Currentweather from "./components/Currentweather";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [location, setLocation] = useState("");
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleLocation = () => {
    if (userInput.trim() != "") {
      setUserInput("");
      setLocation(() => userInput);
    }
  };
  return (
    <div className=" w-full h-screen flex justify-start items-center flex-row divide-x divide-[#E1E8EC]">
      <nav className=" w-1/5  h-full"></nav>
      <main className=" w-[55%] h-full flex justify-start items-center flex-col">
        <Searchbar
          userInput={userInput}
          handleInputChange={handleInputChange}
          handleLocation={handleLocation}
        />
        <Currentweather location={location} />
      </main>
      <section className=" w-[25%] h-full "></section>
    </div>
  );
}
