import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchPropertyDetails } from "../services/api"

const PropertyDetails = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPropertyDetails(id)
        setProperty(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch property details. Please try again.")
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) return <div className="container py-8">Loading...</div>
  if (error) return <div className="container py-8 text-red-500">{error}</div>
  if (!property) return <div className="container py-8">Property not found.</div>

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-semibold mb-4">{property.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-2">About this property</h2>
          <p className="text-gray-600 mb-4">{property.description}</p>
          <h3 className="text-xl font-semibold mb-2">Details</h3>

          <ul className="list-disc list-inside mb-4">
            <li>Guests: {property.guests}</li>
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Beds: {property.beds}</li>
            <li>Bathrooms: {property.bathrooms}</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Amenities</h3>
          <ul className="grid grid-cols-2 gap-2">
            {property.amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">✓</span> {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <p className="text-gray-600 mb-2">{property.location}</p>
        {/* Add a map component here if you have one */}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {/* Add a reviews component here */}
      </div>
    </div>
  )
}

export default PropertyDetails

