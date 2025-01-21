import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { fetchListings } from "../services/api"

const SearchResults = () => {
  const location = useLocation()
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchListings(location.state)
        setListings(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch listings. Please try again.")
        setLoading(false)
      }
    }

    fetchData()
  }, [location.state])

  if (loading) return <div className="container py-8">Loading...</div>
  if (error) return <div className="container py-8 text-red-500">{error}</div>

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold mb-4">Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.id} className="card">
            <img
              src={listing.image || "/placeholder.svg"}
              alt={listing.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{listing.name}</h2>
              <p className="text-gray-600 mb-2">{listing.location}</p>
              <p className="text-teal font-semibold">${listing.price} per night</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults

