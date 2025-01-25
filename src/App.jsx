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
import Careers from "./pages/Careers"
import PressCenter from "./pages/PressCenter"
import InvestorRelations from "./pages/InvestorRelations"
import Countries from "./pages/Countries"
import Cities from "./pages/Cities"
import Airports from "./pages/Airports"
import Hotels from "./pages/Hotels"
import HelpCenter from "./pages/HelpCenter"
import FAQ from "./pages/FAQ"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import ListProperty from './pages/ListProperty'


function App() {
  return (
    
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list-property" element={<ListProperty />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            
            <Route path="/stays" element={<Stays />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/car-rentals" element={<CarRentals />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/airport-taxis" element={<AirportTaxis />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/press" element={<PressCenter />} />
            <Route path="/investor-relations" element={<InvestorRelations />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/airports" element={<Airports />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />

          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

