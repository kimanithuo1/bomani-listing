import { useState } from "react"
import { motion } from "framer-motion"
import SearchForm from "../components/SearchForm"

const AirportTaxis = () => {
  const [taxiOptions] = useState([
    { type: "Standard Sedan", capacity: "3 passengers", price: 40 },
    { type: "Executive Sedan", capacity: "3 passengers", price: 60 },
    { type: "Minivan", capacity: "7 passengers", price: 80 },
    { type: "Luxury Van", capacity: "7 passengers", price: 100 },
  ])

  return (
    <div className="container py-8">
      <h1 className="section-title">Book Airport Transfers</h1>
      <SearchForm />
      <section className="mt-12">
        <h2 className="section-title">Taxi Options</h2>
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
          {taxiOptions.map((option, index) => (
            <motion.div
              key={option.type}
              className="card fade-in"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{option.type}</h3>
              <p className="text-gray-600">{option.capacity}</p>
              <p className="text-sea font-bold mt-2">From ${option.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mt-12">
        <h2 className="section-title">Why Choose Our Airport Taxis</h2>
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Fixed Prices</h3>
            <p>No hidden charges or surge pricing. What you see is what you pay.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">Meet & Greet</h3>
            <p>Our drivers will meet you at the arrival hall with a name board.</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>Round-the-clock customer support for any queries or assistance.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AirportTaxis

