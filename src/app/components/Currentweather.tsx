import Example from "./CurrentGraph";
interface CurrentweatherProps {
  location: string;
}
export default function Currentweather({ location }: CurrentweatherProps) {
  return (
    <section className=" w-[90%] bg-[#C4E2FF] h-2/5 flex rounded-xl justify-between mt-5 text-[#24609B] font-sans ">
      <div className=" w-[50%] m-8 flex justify-between flex-col">
        <div className=" flex w-full justify-between items-center">
          <div className=" flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios/30/24609B/marker--v1.png"
              alt="marker--v1"
              className=" h-5 m-2"
            />
            <h2 className=" text-xl">
              {location == "" ? "Zadejte polohu" : location}
            </h2>
          </div>
          <h2>Today 5:45 PM</h2>
        </div>
        <div className=" flex w-full justify-between items-center flex-col ">
          <h2 className=" text-8xl mb-4">13°</h2>
          <p className=" text-xl">Mostly Clear</p>
        </div>
        <div className=" flex w-full justify-between">
          <div className=" flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/30/24609B/wind--v1.png"
              alt="wind--v1"
              className=" h-5 m-2"
            />
            <h2>720 hpa</h2>
          </div>
          <div className=" flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios/30/24609B/water.png"
              alt="water"
              className=" h-5 m-2"
            />
            <h2>32%</h2>
          </div>
          <div className=" flex flex-row items-center">
            <img
              src="https://img.icons8.com/ios-glyphs/30/24609B/wind--v1.png"
              alt="wind--v1"
              className=" h-5 m-2"
            />
            <h2>12 km/h</h2>
          </div>
        </div>
      </div>
      <div className=" w-[50%] bg-[#9fc6ec] m-6 rounded-xl flex justify-center items-center flex-col">
        <div className=" p-6 w-full h-full flex justify-around items-center flex-col">
          <h2 className=" w-full text-xl">Temprature</h2>
          <div className=" h-2/5 w-[90%] flex justify-center items-center">
            <Example />
          </div>
          <section className=" flex w-full justify-around">
            <div className=" flex justify-start items-center flex-col">
              <p>Morning</p>
              <h3>15°</h3>
            </div>
            <div className=" flex justify-start items-center flex-col">
              <p>Afternoon</p>
              <h3>14°</h3>
            </div>
            <div className=" flex justify-start items-center flex-col">
              <p>Evening</p>
              <h3>16°</h3>
            </div>
            <div className=" flex justify-start items-center flex-col">
              <p>Night</p>
              <h3>12°</h3>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
