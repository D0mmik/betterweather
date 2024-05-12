"use client"
import React, {useEffect, useState} from 'react';
import Searchbar from "@/components/Searchbar";
import {RedirectUser, reverseGeoCode} from "@/actions";

export default function DashboardPage() {
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position.coords.latitude, position.coords.longitude);
          reverseGeoCode(position.coords.latitude, position.coords.longitude)
            .then((response) => {
              RedirectUser(response[0]?.name)

            })
            .catch((error) => {
              setError(error.message);
            });
        }, (error) => {
          setError(error.message);
        });
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []); // Empty dependency array to run effect only once

  return (
    <main className="flex h-full flex-col items-center justify-start w-[55%]">
      <Searchbar/>
      <div className="flex flex-col">
        {error && error}
      </div>
    </main>);
}
