import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
  const [currency, setCurrency] = useState("USD")

  const navItems = [
    { label: "Stays", icon: "🏠", description: "Find perfect accommodations", path: "/stays" },
    { label: "Flights", icon: "✈️", description: "Book flights worldwide", path: "/flights" },
    { label: "Flight + Hotel", icon: "🏨", description: "Save on travel packages", path: "/packages" },
    { label: "Car rentals", icon: "🚗", description: "Rent vehicles globally", path: "/car-rentals" },
    { label: "Attractions", icon: "🎭", description: "Discover local experiences", path: "/attractions" },
    { label: "Airport taxis", icon: "🚕", description: "Reliable airport transfers", path: "/airport-taxis" },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Bomani.com
          </Link>
          <div className="flex items-center space-x-4">
            <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="input">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
            <Link to="/list-property" className="btn btn-secondary">
              List your property
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Register
            </Link>
            <Link to="/sign-in" className="btn btn-primary">
              Sign in
            </Link>
          </div>
        </div>
        <nav className="nav-menu">
          {navItems.map((item) => (
            <motion.div key={item.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to={item.path} className="nav-item">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                <span className="nav-description">{item.description}</span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

