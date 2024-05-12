"use server"
import Searchbar from "@/components/Searchbar";

export default async function SettingsPage() {
  return(
    <main className="flex h-full flex-col items-center justify-start w-[55%]">
      <Searchbar />
      settings
    </main>
  )
}