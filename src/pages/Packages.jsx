import { useState } from "react"
import { motion } from "framer-motion"
import SearchForm from "../components/SearchForm"

const Packages = () => {
  const [featuredPackages] = useState([
    { name: "Romantic Paris Getaway", duration: "5 days", price: 1200, image: "/images/paris-package.jpg" },
    { name: "Tokyo Tech Tour", duration: "7 days", price: 1800, image: "/images/tokyo-package.jpg" },
    { name: "Caribbean Cruise Adventure", duration: "10 days", price: 2500, image: "/images/caribbean-package.jpg" },
    { name: "African Safari Experience", duration: "8 days", price: 3000, image: "/images/safari-package.jpg" },
  ])

  return (
    <div className="container py-8">
      <h1 className="section-title">Flight + Hotel Packages</h1>
      <SearchForm />
      <section className="mt-12">
        <h2 className="section-title">Featured Packages</h2>
        <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className="card fade-in"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{pkg.name}</h3>
                <p className="text-gray-600">{pkg.duration}</p>
                <p className="text-sea font-bold mt-2">From ${pkg.price} per person</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Packages

