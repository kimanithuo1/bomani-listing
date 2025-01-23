import { useState } from "react"
import { motion } from "framer-motion"
import SearchForm from "../components/SearchForm"

const Attractions = () => {
  const [popularAttractions] = useState([
    { name: "Eiffel Tower Tour", location: "Paris, France", price: 25, image: "/images/eiffel-tower.jpg" },
    { name: "Colosseum Skip-the-Line", location: "Rome, Italy", price: 35, image: "/images/colosseum.jpg" },
    { name: "Great Wall Hiking Tour", location: "Beijing, China", price: 50, image: "/images/great-wall.jpg" },
    { name: "Statue of Liberty Cruise", location: "New York, USA", price: 30, image: "/images/statue-liberty.jpg" },
  ])

  return (
    <div className="container py-8">
      <h1 className="section-title">Discover Attractions</h1>
      <SearchForm />
      <section className="mt-12">
        <h2 className="section-title">Popular Attractions</h2>
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
          {popularAttractions.map((attraction, index) => (
            <motion.div
              key={attraction.name}
              className="card fade-in"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={attraction.image || "/placeholder.svg"}
                alt={attraction.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{attraction.name}</h3>
                <p className="text-gray-600">{attraction.location}</p>
                <p className="text-sea font-bold mt-2">From ${attraction.price} per person</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Attractions

