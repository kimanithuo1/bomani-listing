import { useState } from "react"
import { motion } from "framer-motion"
import SearchForm from "../components/SearchForm"

const Flights = () => {
  const [popularRoutes] = useState([
    { from: "New York", to: "London", price: 450, airline: "TransAtlantic Airways" },
    { from: "Tokyo", to: "Los Angeles", price: 780, airline: "Pacific Flyers" },
    { from: "Dubai", to: "Paris", price: 380, airline: "EuroConnect" },
    { from: "Sydney", to: "Singapore", price: 320, airline: "AsiaPacific Air" },
  ])

  return (
    <div className="container py-8">
      <h1 className="section-title">Book Your Flights</h1>
      <SearchForm />
      <section className="mt-12">
        <h2 className="section-title">Popular Routes</h2>
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
          {popularRoutes.map((route, index) => (
            <motion.div
              key={`${route.from}-${route.to}`}
              className="card fade-in"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold">
                {route.from} to {route.to}
              </h3>
              <p className="text-gray-600">{route.airline}</p>
              <p className="text-sea font-bold mt-2">From ${route.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Flights

