import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: {
      adults: 2,
      children: 0,
      rooms: 1,
    },
    includeFlights: false,
  })

  const handleSearch = (e) => {
    e.preventDefault()
    navigate("/search-results", { state: searchParams })
  }

  return (
    <div className="container py-8">
      <form onSubmit={handleSearch} className="card">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="relative">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Where are you going?</label>
            <input
              type="text"
              id="location"
              placeholder="Enter destination"
              className="input"
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            />
          </div>

          {/* Check-in */}
          <div>
            <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
            <input
              type="date"
              id="checkIn"
              className="input"
              value={searchParams.checkIn}
              onChange={(e) => setSearchParams({ ...searchParams, checkIn: e.target.value })}
            />
          </div>

          {/* Check-out */}
          <div>
            <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
            <input
              type="date"
              id="checkOut"
              className="input"
              value={searchParams.checkOut}
              onChange={(e) => setSearchParams({ ...searchParams, checkOut: e.target.value })}
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
            <button type="button" className="input text-left">
              {searchParams.guests.adults} adults · {searchParams.guests.children} children ·{" "}
              {searchParams.guests.rooms} room
            </button>
          </div>
        </div>

        {/* Include flights checkbox */}
        <div className="mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded text-sea focus:ring-sea"
              checked={searchParams.includeFlights}
              onChange={(e) => setSearchParams({ ...searchParams, includeFlights: e.target.checked })}
            />
            <span className="text-sm text-gray-700">I'm looking for flights</span>
          </label>
        </div>

        {/* Search button */}
        <button type="submit" className="mt-4 btn btn-primary">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchForm
