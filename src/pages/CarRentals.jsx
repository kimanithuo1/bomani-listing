import { useState } from "react"
import { motion } from "framer-motion"
import SearchForm from "../components/SearchForm"

const CarRentals = () => {
  const [popularCars] = useState([
    { name: "Economy Compact", price: 30, image: "/images/economy-car.jpg" },
    { name: "Midsize Sedan", price: 45, image: "/images/midsize-car.jpg" },
    { name: "SUV", price: 60, image: "/images/suv-car.jpg" },
    { name: "Luxury Vehicle", price: 100, image: "/images/luxury-car.jpg" },
  ])

  return (
    <div className="container py-8">
      <h1 className="section-title">Rent a Car</h1>
      <SearchForm />
      <section className="mt-12">
        <h2 className="section-title">Popular Car Types</h2>
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
          {popularCars.map((car, index) => (
            <motion.div
              key={car.name}
              className="card fade-in"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={car.image || "/placeholder.svg"}
                alt={car.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-sea font-bold mt-2">From ${car.price} per day</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CarRentals

