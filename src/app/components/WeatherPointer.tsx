interface WeatherPointerProps {
  PointerTitle: string;
  PointerDesc: string;
  PointerCompas: boolean;
  PointerValue: string;
  PointerGraph: JSX.Element;
}

export default function WeatherPointer({
  PointerTitle,
  PointerDesc,
  PointerValue,
  PointerCompas,
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
        <div className=" w-1/2 flex justify-center items-center relative">
          {PointerCompas && (
            <>
              <p className="absolute top-[calc(100%-7rem)] left-[45%]">N</p>
              <p className=" absolute left-9">W</p>
              <p className=" absolute  right-11">E</p>
              <p className=" absolute bottom-2 left-[45%] ">S</p>
            </>
          )}
          <div className=" w-full flex items-center justify-center">
            <div className={PointerCompas ? "backPic" : ""}>{PointerGraph}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
