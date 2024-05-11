"use client"
import SavedSvg from "@/components/icons/sideMenuICons/savedSvg";
import {useState} from "react";
import {useUser} from "@clerk/nextjs";

export default function SaveLocationButton({color, city} : {color : string, city : string}) {

  const {user} = useUser()

  const [clicked, setClicked] = useState(false)
  let fill = clicked ? "#F45866" : color;

  const SaveLocation = () => {
    setClicked(!clicked)
    console.log((clicked ? "unsave " : "save ") + user?.id + " " + city)
  }


  return (
    <div className="px-2" onClick={SaveLocation}>
      <SavedSvg color={fill}/>
    </div>
  )
}