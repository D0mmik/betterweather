export default function SideMenuButton({ ButtonTitle, backgroundImage }) {
  return (
    <div className=" flex flex-row items-center justify-start m-4 w-full">
      <img src={backgroundImage} alt="" className=" p-4" />
      <button className=" text-[#A6B6BF]">{ButtonTitle}</button>
    </div>
  );
}
