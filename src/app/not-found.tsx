"use server"
import Searchbar from "@/components/Searchbar";

export default async function ErrorPage() {
  return (
  <>
    <main className="flex h-full flex-col items-center justify-start w-[55%] mt-3">
      <Searchbar/>
      <div className="flex w-full h-full items-center justify-center text-2xl">
        Error (City not found)
      </div>
    </main>
    <section className="h-full w-[25%]"></section>
  </>
  );
}
