"use server"
import Searchbar from "@/app/components/Searchbar";
import CurrentWeather from "@/app/components/Currentweather";

export default async function HomePage() {
  return (
    <>
      <main className="w-[55%] h-full flex justify-start items-center flex-col">
        <Searchbar />
      </main>
      <section className="w-[25%] h-full">test2</section>
    </>
  );
}
