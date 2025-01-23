import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Stays from "./pages/Stays"
import Flights from "./pages/Flights"
import Packages from "./pages/Packages"
import CarRentals from "./pages/CarRentals"
import Attractions from "./pages/Attractions"
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
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/airport-taxis" element={<AirportTaxis />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="grid grid-cols-1 grid-cols-2 grid-cols-4">
              <div>
                <h3 className="footer-title">About Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="footer-link">
                      About Bomani.com
                    </a>
                  </li>
                  <li>
                    <a href="/careers" className="footer-link">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="/press" className="footer-link">
                      Press Center
                    </a>
                  </li>
                  <li>
                    <a href="/investor-relations" className="footer-link">
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footer-title">Destinations</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/countries" className="footer-link">
                      Countries
                    </a>
                  </li>
                  <li>
                    <a href="/cities" className="footer-link">
                      Cities
                    </a>
                  </li>
                  <li>
                    <a href="/airports" className="footer-link">
                      Airports
                    </a>
                  </li>
                  <li>
                    <a href="/hotels" className="footer-link">
                      Hotels
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footer-title">Help</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/help" className="footer-link">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="/faq" className="footer-link">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="/privacy" className="footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="footer-link">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="footer-title">Connect With Us</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://facebook.com/bomani" className="footer-link">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/bomani" className="footer-link">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/bomani" className="footer-link">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/company/bomani" className="footer-link">
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

