import { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cities } from "@/data/cities"
import { MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Locations | FindAnAdvisor",
  description: "Find financial advisors and professionals in cities across the UK.",
}

export default function LocationsPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Browse Locations
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
              Find professionals in your area
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Card key={city.id} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                    {city.name}
                  </CardTitle>
                  <CardDescription>{city.county}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}