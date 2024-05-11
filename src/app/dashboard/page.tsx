"use server"
import Searchbar from "@/components/Searchbar";
import {UserButton} from "@clerk/nextjs";

export default async function DashboardPage() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-start w-[55%]">
        <Searchbar />
        dashboard
      </main>
      <section className="h-full w-[25%]"></section>
    </>
  );
}
