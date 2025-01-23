import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import SearchForm from "../components/SearchForm"

const Home = () => {
  const popularDestinations = [
    { name: "Paris", image: "/images/paris.jpg", country: "France" },
    { name: "Tokyo", image: "/images/tokyo.jpg", country: "Japan" },
    { name: "New York", image: "/images/new-york.jpg", country: "USA" },
    { name: "Sydney", image: "/images/sydney.jpg", country: "Australia" },
  ]

  return (
    <div className="min-h-screen">
      <main>
        <section className="hero">
          <div className="container">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover Your Next Adventure
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find the perfect stay, flight, or experience anywhere in the world
            </motion.p>
            <SearchForm />
          </div>
        </section>

        <section className="container py-16">
          <h2 className="section-title">Popular Destinations</h2>
          <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                className="fade-in"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/search-results?location=${destination.name}`} className="card">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <p className="text-gray-600">{destination.country}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <h2 className="section-title">Special Offers</h2>
            <div className="grid grid-cols-1 grid-cols-2">
              <motion.div className="card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <h3 className="text-2xl font-semibold mb-4">Early Bird Discount</h3>
                <p className="mb-4">Book your stay 60 days in advance and get 20% off on selected properties.</p>
                <Link to="/search-results?earlyBird=true" className="btn btn-primary">
                  Explore Early Bird Deals
                </Link>
              </motion.div>
              <motion.div className="card" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <h3 className="text-2xl font-semibold mb-4">Last Minute Deals</h3>
                <p className="mb-4">Spontaneous traveler? Check out our last-minute deals and save up to 15%.</p>
                <Link to="/search-results?lastMinute=true" className="btn btn-secondary">
                  View Last Minute Offers
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="hero py-16">
          <div className="container">
            <h2 className="section-title text-white">Why Choose Bomani.com</h2>
            <div className="grid grid-cols-1 grid-cols-2 grid-cols-3">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                <p>Find a lower price? We'll match it and give you an additional 10% off.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">No Booking Fees</h3>
                <p>We don't charge any booking fees. The price you see is the price you pay.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                <p>Our friendly support team is available round the clock to assist you.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

