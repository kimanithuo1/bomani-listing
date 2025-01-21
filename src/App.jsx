import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Stays from "./pages/Stays"
import Flights from "./pages/Flights"
import Packages from "./pages/Packages"
import CarRentals from "./pages/CarRentals"
import Experiences from "./pages/Experiences"
import AirportTaxis from "./pages/AirportTaxis"
import SearchResults from "./pages/SearchResults"
import PropertyDetails from "./pages/PropertyDetails"
import Header from "./components/Header"

function App() {
  return (

      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stays" element={<Stays />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/car-rentals" element={<CarRentals />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/airport-taxis" element={<AirportTaxis />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <footer className="bg-teal text-white py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="hover:text-mint transition-colors">
                      About Bomani.com
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="hover:text-mint transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/press" className="hover:text-mint transition-colors">
                      Press Center
                    </a>
                  </li>
                  <li>
                    <a href="/investor-relations" className="hover:text-mint transition-colors">
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Destinations</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/countries/kenya" className="hover:text-mint transition-colors">
                      Kenya
                    </a>
                  </li>
                  <li>
                    <a href="/countries/tanzania" className="hover:text-mint transition-colors">
                      Tanzania
                    </a>
                  </li>
                  <li>
                    <a href="/countries/uganda" className="hover:text-mint transition-colors">
                      Uganda
                    </a>
                  </li>
                  <li>
                    <a href="/countries/ethiopia" className="hover:text-mint transition-colors">
                      Ethiopia
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Help</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/help" className="hover:text-mint transition-colors">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="hover:text-mint transition-colors">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="hover:text-mint transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-mint transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://facebook.com/bomani" className="hover:text-mint transition-colors">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/bomani" className="hover:text-mint transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/bomani" className="hover:text-mint transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/company/bomani" className="hover:text-mint transition-colors">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <p>&copy; 2025 Bomani.com. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

  )
}

export default App
