"use server";
import Searchbar from "@/components/Searchbar";

export default async function Loading() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-start w-[55%]">
        <Searchbar />
        <section className="w-[90%] h-2/5 rounded-xl mt-5 animate-pulse flex justify-center items-center max-sm:w-full">
          <p className="text-xl">Loading..</p>
        </section>
      </main>
      <section className="h-full w-[25%]"></section>
    </>
  );
}
