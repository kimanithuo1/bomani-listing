import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [currency, setCurrency] = useState("USD")

  const navItems = [
    { label: "Stays", icon: "🏠", description: "Find accommodations for your trip" },
    { label: "Flights", icon: "✈️", description: "Book flights to your destination" },
    { label: "Flight + Hotel", icon: "🏨", description: "Save on combined bookings" },
    { label: "Car rentals", icon: "🚗", description: "Rent a car for your journey" },
    { label: "Experiences", icon: "🎯", description: "Discover unique activities" },
    { label: "Airport taxis", icon: "🚕", description: "Book reliable airport transfers" },
  ]

  return (
    <header className="bg-teal text-white">
      <div className="container">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold">
            Bomani.com
          </Link>
          <div className="flex items-center gap-4">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-transparent border-none"
            >
              <option value="USD">USD</option>
              <option value="KES">KES</option>
              <option value="TZS">TZS</option>
              <option value="UGX">UGX</option>
            </select>
            <Link to="/list-property" className="hover:text-mint">
              List your property
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Register
            </Link>
            <Link to="/sign-in" className="btn btn-secondary">
              Sign in
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 py-4 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={`/${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex flex-col items-center px-4 py-2 rounded-lg hover:bg-sea transition-colors"
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              <span className="text-xs text-center mt-1">{item.description}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header

