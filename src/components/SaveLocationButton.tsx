"use client"
import SavedSvg from "@/components/icons/sideMenuICons/savedSvg";
import {useState} from "react";
import {useUser} from "@clerk/nextjs";
import {deleteCity, postCity} from "@/actions";

export default function SaveLocationButton({color, city, saved} : {color : string, city : string, saved : boolean}) {

  const {user} = useUser()

  const [clicked, setClicked] = useState(saved)
  let fill = clicked ? "#F45866" : color;

  const SaveLocation = () => {
    setClicked(!clicked)
    clicked ? deleteCity(city) : postCity(city)
  }


  return (
    <div className="px-2" onClick={SaveLocation}>
      <SavedSvg color={fill}/>
    </div>
  )
}