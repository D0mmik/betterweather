"use server"
import SideMenuButton from "./SideMenuButton";

export default async function SideMenu() {
  return (
    <div className=" w-full h-full flex items-center flex-col font-sans font-light">
      <div className=" flex flex-row mt-8 items-center justify-start w-7/12">
        <img src="/LogoApp.png" alt="" width={50} height={50} />
        <h1 className=" m-3 text-2xl font-medium">Caucane</h1>
      </div>
      <div className=" h-full flex w-full flex-col items-end justify-between mt-14">
        <div className=" h-full flex w-10/12 flex-col items-center ">
          <div className=" flex flex-row items-center justify-start border-r-[1px] border-[#1F1E31] m-4 w-full">
            <img src="/Category.png" alt="" className=" p-4" />
            <button className=" ">Dashboard</button>
          </div>
          <SideMenuButton ButtonTitle="Map" backgroundImage="/Activites.png" />
          <SideMenuButton
            ButtonTitle="Saved Location"
            backgroundImage="/Heart.png"
          />
          <SideMenuButton
            ButtonTitle="Calendar"
            backgroundImage="/Calendar.png"
          />
          <SideMenuButton
            ButtonTitle="Settings"
            backgroundImage="/Setting.png"
          />
        </div>
        <div className=" flex w-10/12 flex-col items-center ">
          <SideMenuButton ButtonTitle="Log Out" backgroundImage="/Logout.png" />
        </div>
      </div>
    </div>
  );
}
