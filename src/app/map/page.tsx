"use server";
import Searchbar from "@/components/Searchbar";

export default async function MapPage() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-start w-[55%] max-sm:w-full">
        <Searchbar />
        map
      </main>
    </>
  );
}
