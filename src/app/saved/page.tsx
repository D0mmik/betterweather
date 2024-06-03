"use server";
import Searchbar from "@/components/Searchbar";
import { getAllCity } from "@/actions";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SavedCity from "@/components/SavedCity";

export default async function SavedLocationsPage() {
  const cities = await getAllCity();

  return (
    <main className="flex h-full flex-col items-center justify-start w-[55%] max-sm:w-full">
      <Searchbar />
      <div className="w-full h-full">
        <SignedIn>
          <div className="max-h-full overflow-auto scroll-smooth">
            {cities.rows.map((city) => (
              <SavedCity key={city.id} city={city} />
            ))}
          </div>
        </SignedIn>
        <SignedOut>
          <section className="h-2/5 mt-5 flex justify-center items-center">
            <p className="text-xl">Please login</p>
          </section>
        </SignedOut>
      </div>
    </main>
  );
}
