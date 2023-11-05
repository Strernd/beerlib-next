/**
 * v0 by Vercel.
 * @see https://v0.dev/t/53oGlnSz7LZ
 */
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import Image from "next/image"

function Beer(){
return (
    <div className="card">
    <Image
      alt="Beer image"
      className="w-full h-64 object-cover rounded-t-lg"
      height="200"
      src="/beer.jpeg"
      style={{
        aspectRatio: "200/200",
        objectFit: "cover",
      }}
      width="200"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold">Beer Name</h3>
      <p className="text-gray-500 dark:text-gray-400">ABV: 5.0% | IBU: 40</p>
    </div>
  </div>
)
}

export default function BreweryPage({params}: {params: {name: string}}) {
  return (
    <section className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        <aside>
          <h2 className="text-2xl font-bold mb-4">Filters</h2>
          <form>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200" htmlFor="year">
              Year
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-200" htmlFor="style">
              Style
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="lager">Lager</SelectItem>
                  <SelectItem value="ale">Ale</SelectItem>
                  <SelectItem value="stout">Stout</SelectItem>
                  <SelectItem value="pilsner">Pilsner</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </form>
        </aside>
        <main>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold capitalize">{params.name} beer library</h1>
            <input
              className="border-2 border-gray-300 rounded-md p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              placeholder="Search for a beer..."
              type="search"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Beer/>
            <Beer/>
            <Beer/>
            <Beer/>
            <Beer/>
            <Beer/>
          </div>
        </main>
      </div>
    </section>
  )
}

