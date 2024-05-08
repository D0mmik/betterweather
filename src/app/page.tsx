"use server"
import Searchbar from "@/app/components/Searchbar";
import CurrentWeather from "@/app/components/Currentweather";

export default async function HomePage() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-start w-[55%]">
        <Searchbar />
      </main>
      <section className="h-full w-[25%]"></section>
    </>
  );
}
