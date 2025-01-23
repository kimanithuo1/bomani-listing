import { useState } from "react"
import { motion } from "framer-motion"
import SearchForm from "../components/SearchForm"

const Stays = () => {
  const [popularStays] = useState([
    { name: "Luxury Beach Resort", location: "Bali, Indonesia", price: 250, image: "/images/bali-resort.jpg" },
    { name: "Mountain Lodge", location: "Swiss Alps, Switzerland", price: 180, image: "/images/swiss-lodge.jpg" },
    { name: "City Center Apartment", location: "Paris, France", price: 120, image: "/images/paris-apartment.jpg" },
    {
      name: "Historic Castle Hotel",
      location: "Edinburgh, Scotland",
      price: 300,
      image: "/images/edinburgh-castle.jpg",
    },
  ])

  return (
    <div className="container py-8">
      <h1 className="section-title">Find Your Perfect Stay</h1>
      <SearchForm />
      <section className="mt-12">
        <h2 className="section-title">Popular Accommodations</h2>
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
          {popularStays.map((stay, index) => (
            <motion.div
              key={stay.name}
              className="card fade-in"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={stay.image || "/placeholder.svg"}
                alt={stay.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{stay.name}</h3>
                <p className="text-gray-600">{stay.location}</p>
                <p className="text-sea font-bold mt-2">From ${stay.price} per night</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Stays

