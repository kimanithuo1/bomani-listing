import { Link } from "react-router-dom"

const destinations = [
  {
    country: "Kenya",
    description: "Experience the magic of safaris and beautiful beaches.",
    image: "/kenya.jpg",
    cities: ["Nairobi", "Mombasa", "Nakuru", "Malindi"],
  },
  {
    country: "Tanzania",
    description: "Home to Mount Kilimanjaro and the Serengeti National Park.",
    image: "/tanzania.jpg",
    cities: ["Dar es Salaam", "Zanzibar", "Arusha", "Dodoma"],
  },
  {
    country: "Uganda",
    description: "Discover the source of the Nile and mountain gorillas.",
    image: "/uganda.jpg",
    cities: ["Kampala", "Entebbe", "Jinja", "Fort Portal"],
  },
  {
    country: "Ethiopia",
    description: "Explore ancient history and diverse landscapes.",
    image: "/ethiopia.jpg",
    cities: ["Addis Ababa", "Gondar", "Lalibela", "Bahir Dar"],
  },
]

const Destinations = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-teal mb-6">Explore East African Destinations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {destinations.map((destination) => (
          <div key={destination.country} className="card">
            <img
              src={destination.image || "/placeholder.svg"}
              alt={destination.country}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-sea mb-2">{destination.country}</h2>
              <p className="mb-4">{destination.description}</p>
              <h3 className="text-lg font-semibold mb-2">Popular Cities:</h3>
              <ul className="list-disc list-inside mb-4">
                {destination.cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
              <Link to={`/countries/${destination.country.toLowerCase()}`} className="btn btn-primary">
                Explore {destination.country}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Destinations

