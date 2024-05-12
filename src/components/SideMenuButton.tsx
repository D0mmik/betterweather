"use client"
import {usePathname} from "next/navigation";
import Link from "next/link";
import SideMenuSvgs from "@/components/icons/sideMenuSvgs";
import {useState} from "react";

interface SideMenuButtonProps {
  ButtonTitle: string;
  href : string;
}

export default function SideMenuButton({
  ButtonTitle,
  href
}: SideMenuButtonProps) {
  const pathname = usePathname()
  const active = pathname.includes("/" + href.toLowerCase())

  const [hovered, setHovered] = useState(false);

  return (
    <Link className="m-3 py-2 flex w-full flex-row items-center justify-start rounded-l-xl text-[#1F1E31] duration-300
      hover:text-[#1F1E31] hover:bg-[#C4E2FF] hover:font-medium hover:border-solid hover:border-r-2 hover:border-[#1F1E31]" style={active ? {
      borderRight: "2px",
      borderStyle : "solid",
      borderColor : "#1F1E31",
      fontWeight : "500"
      } : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={"/" + href}
    >
      <SideMenuSvgs name={href} color={active || hovered ? "#1F1E31" : "#A6B6BF"}/>
        <h2 style={active ? {color: "#1F1E31"} : undefined}>{ButtonTitle}</h2>
    </Link>
  );
}
