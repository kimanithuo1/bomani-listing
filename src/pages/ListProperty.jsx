import { useState } from "react"

const ListProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    name: "",
    type: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
  })

  const handleChange = (e) => {
    setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle property listing submission logic here
    console.log("Property details:", propertyDetails)
  }

  return (
    <div className="container py-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-teal mb-6">List Your Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Property Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={propertyDetails.name}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select id="type" name="type" value={propertyDetails.type} onChange={handleChange} required className="input">
            <option value="">Select a type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="hotel">Hotel</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={propertyDetails.location}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={propertyDetails.bedrooms}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1">
              Bathrooms
            </label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={propertyDetails.bathrooms}
              onChange={handleChange}
              required
              className="input"
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price per Night (USD)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={propertyDetails.price}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          List Property
        </button>
      </form>
    </div>
  )
}

export default ListProperty

