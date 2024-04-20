interface WeatherPointerProps {
  PointerTitle: string;
  PointerDesc: string;
  PointerValue: string;
}

export default function WeatherPointer({
  PointerTitle,
  PointerDesc,
  PointerValue,
  PointerGraph,
}: WeatherPointerProps) {
  return (
    <div className=" bg-[#ECF3F8] rounded-xl w-full h-full">
      <div className=" flex  w-full h-full p-5">
        <div className=" w-1/2 flex justify-between flex-col">
          <h2 className=" text-xl">{PointerTitle}</h2>
          <p className=" text-[#999999]">{PointerDesc}</p>
          <h2 className=" text-xl">{PointerValue}</h2>
        </div>
        <div className=" w-1/2 flex justify-center items-center">
          <div className=" flex items-center justify-center">
            {PointerGraph}
          </div>
        </div>
      </div>
    </div>
  );
}
