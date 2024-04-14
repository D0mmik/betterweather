import Searchbar from "@/app/components/Searchbar";
import CurrentWeather from "@/app/components/Currentweather";

export default function Loading() {
  return (
  <>
    <main className="w-[55%] h-full flex justify-start items-center flex-col">
      <Searchbar/>
      <section className="w-[90%] bg-[#C4E2FF] h-2/5 rounded-xl mt-5 animate-pulse flex justify-center items-center">
        <p>Loading..</p>
      </section>
    </main>
    <section className="w-[25%] h-full">
      test2
    </section>
  </>
  )
}