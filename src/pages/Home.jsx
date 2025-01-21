import { Link } from "react-router-dom"
import SearchForm from "../components/SearchForm"

const Home = () => {
  const popularDestinations = [
    { name: "Nairobi", image: "/placeholder.svg", country: "Kenya" },
    { name: "Zanzibar", image: "/placeholder.svg", country: "Tanzania" },
    { name: "Kampala", image: "/placeholder.svg", country: "Uganda" },
    { name: "Addis Ababa", image: "/placeholder.svg", country: "Ethiopia" },
  ]

  return (
    <div className="min-h-screen bg-mint/10">
      <main>
        <section className="bg-teal text-white py-16">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Discover East Africa</h1>
            <p className="text-xl mb-8">Find your perfect stay in the heart of Africa</p>
            <SearchForm />
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="container py-16">
          <h2 className="text-3xl font-semibold text-teal mb-8">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((destination) => (
              <Link
                to={`/search-results?location=${destination.name}`}
                key={destination.name}
                className="card search-result-item"
              >
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
            ))}
          </div>
        </section>

        {/* Promotions Section */}
        <section className="container py-16">
          <h2 className="text-3xl font-semibold text-teal mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Early Bird Discount</h3>
              <p className="text-gray-600 mb-4">
                Book your stay 60 days in advance and get 20% off on selected properties.
              </p>
              <Link to="/search-results?earlyBird=true" className="btn btn-primary">
                Explore Early Bird Deals
              </Link>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Last Minute Deals</h3>
              <p className="text-gray-600 mb-4">
                Spontaneous traveler? Check out our last-minute deals and save up to 15%.
              </p>
              <Link to="/search-results?lastMinute=true" className="btn btn-primary">
                View Last Minute Offers
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-sea text-white py-16">
          <div className="container">
            <h2 className="text-3xl font-semibold mb-8">Why Choose Bomani.com</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
                <p>Find a lower price? We'll match it and give you an additional 10% off.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">No Booking Fees</h3>
                <p>We don't charge any booking fees. The price you see is the price you pay.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                <p>Our friendly support team is available round the clock to assist you.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

