"use client"

interface WeatherPointerProps {
  PointerTitle: string;
  PointerDesc: string;
  PointerCompas: boolean;
  PointerValue: string;
  PointerGraph: JSX.Element;
  imageUrl?: string
  bgImage?: boolean
}

export default function WeatherPointer({
                                         PointerTitle, PointerDesc, PointerValue, PointerCompas, PointerGraph, imageUrl, bgImage
                                       }: WeatherPointerProps) {
  return (
  <div className="bg-[#ECF3F8] rounded-xl w-full h-full">
    <div className="flex h-full w-full p-5">
      <div className="flex w-1/2 flex-col justify-between">
        <h2 className="text-xl">{PointerTitle}</h2>
        <p className="font-light text-[#999999]">{PointerDesc}</p>
        <h2 className="text-xl">{PointerValue}</h2>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <div className="relative" style={bgImage ? {
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "140px",
            height: "140px"
          } : undefined}>
            {PointerGraph}
            {PointerCompas && <div className="absolute top-0 left-0 right-0 bottom-0">
              <div className="flex justify-center">
                <p className="absolute top-3">N</p>
                <p className="absolute bottom-3">S</p>
                <p className="absolute left-4 top-1/2 transform -translate-y-1/2">W</p>
                <p className="absolute right-4 top-1/2 transform -translate-y-1/2">E</p>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  </div>);
}