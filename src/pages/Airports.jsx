import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  fetchFlightData, 
  fetchWeatherData,
  fetchPlacesData,
  fetchTransportData 
} from '../services/api'

const Airports = () => {
  const [airports, setAirports] = useState([])
  const [selectedAirport, setSelectedAirport] = useState(null)
  const [flightData, setFlightData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [transportOptions, setTransportOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const loadAirportsData = async () => {
      try {
        const majorAirports = await fetchPlacesData('major airports in East Africa')
        setAirports(majorAirports.results)
        setLoading(false)
      } catch (error) {
        console.error('Error loading airports:', error)
        setLoading(false)
      }
    }
    loadAirportsData()
  }, [])

  useEffect(() => {
    if (selectedAirport) {
      const loadAirportDetails = async () => {
        try {
          const [flights, weather, transport] = await Promise.all([
            fetchFlightData(selectedAirport.iata_code),
            fetchWeatherData(selectedAirport.geometry.location.lat, selectedAirport.geometry.location.lng),
            fetchTransportData(selectedAirport.place_id)
          ])
          setFlightData(flights)
          setWeatherData(weather)
          setTransportOptions(transport)
        } catch (error) {
          console.error('Error loading airport details:', error)
        }
      }
      loadAirportDetails()

      // Real-time flight updates every 5 minutes
      const flightUpdateInterval = setInterval(async () => {
        try {
          const updatedFlights = await fetchFlightData(selectedAirport.iata_code)
          setFlightData(updatedFlights)
        } catch (error) {
          console.error('Error updating flight data:', error)
        }
      }, 300000)

      return () => clearInterval(flightUpdateInterval)
    }
  }, [selectedAirport])

  const AirportDetail = ({ airport }) => (
    <motion.div 
      className="airport-detail-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{airport.name}</h2>
          <div className="airport-code">{airport.iata_code}</div>
          <button onClick={() => setSelectedAirport(null)} className="close-btn">×</button>
        </div>

        <div className="airport-overview">
          <img 
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${airport.photos[0].photo_reference}&key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}`}
            alt={airport.name}
            className="airport-main-image"
          />
          
          {weatherData && (
            <div className="weather-widget">
              <h3>Airport Weather</h3>
              <div className="weather-info">
                <div className="temperature">
                  <span className="temp-value">{Math.round(weatherData.main.temp)}°C</span>
                  <span className="weather-description">{weatherData.weather[0].description}</span>
                </div>
                <div className="weather-details">
                  <p>Visibility: {weatherData.visibility}m</p>
                  <p>Wind: {weatherData.wind.speed}m/s</p>
                  <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {flightData && (
          <div className="flights-section">
            <div className="departures">
              <h3>Departures</h3>
              <div className="flight-board">
                {flightData.departures.map(flight => (
                  <motion.div 
                    key={flight.flight_number}
                    className="flight-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="time">{flight.scheduled_time}</span>
                    <span className="destination">{flight.destination}</span>
                    <span className="airline">{flight.airline}</span>
                    <span className="flight-number">{flight.flight_number}</span>
                    <span className={`status ${flight.status.toLowerCase()}`}>
                      {flight.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="arrivals">
              <h3>Arrivals</h3>
              <div className="flight-board">
                {flightData.arrivals.map(flight => (
                  <motion.div 
                    key={flight.flight_number}
                    className="flight-info"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="time">{flight.scheduled_time}</span>
                    <span className="origin">{flight.origin}</span>
                    <span className="airline">{flight.airline}</span>
                    <span className="flight-number">{flight.flight_number}</span>
                    <span className={`status ${flight.status.toLowerCase()}`}>
                      {flight.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="transport-section">
          <h3>Ground Transportation</h3>
          <div className="transport-options">
            {transportOptions.map(option => (
              <div key={option.id} className="transport-card">
                <h4>{option.type}</h4>
                <p className="price-range">{option.price_range}</p>
                <p className="duration">Average duration: {option.duration}</p>
                <div className="providers">
                  {option.providers.map(provider => (
                    <div key={provider.id} className="provider">
                      <img src={provider.logo} alt={provider.name} />
                      <span>{provider.name}</span>
                    </div>
                  ))}
                </div>
                <button className="book-transport">Book Now</button>
              </div>
            ))}
          </div>
        </div>

        <div className="facilities-section">
          <h3>Airport Facilities</h3>
          <div className="facilities-grid">
            {airport.facilities?.map(facility => (
              <div key={facility.id} className="facility-card">
                <i className={facility.icon}></i>
                <h4>{facility.name}</h4>
                <p>{facility.description}</p>
                <p className="location">Location: {facility.location}</p>
                <p className="hours">Hours: {facility.operating_hours}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="map-section">
          <h3>Airport Map</h3>
          <div className="map-container">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&q=${encodeURIComponent(airport.name)}`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  )

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading airports...</p>
      </div>
    )
  }

  return (
    <div className="airports-page">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search airports..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="airports-grid">
        {airports
          .filter(airport => 
            airport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            airport.iata_code?.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(airport => (
            <motion.div
              key={airport.place_id}
              className="airport-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedAirport(airport)}
            >
              <img 
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${airport.photos[0].photo_reference}&key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}`}
                alt={airport.name}
              />
              <div className="airport-card-content">
                <h3>{airport.name}</h3>
                <p className="airport-code">{airport.iata_code}</p>
                <p>{airport.formatted_address}</p>
                <div className="airport-rating">
                  {airport.rating} ⭐ ({airport.user_ratings_total} reviews)
                </div>
                <button className="view-details-btn">View Details</button>
              </div>
            </motion.div>
          ))}
      </div>

      <AnimatePresence>
        {selectedAirport && <AirportDetail airport={selectedAirport} />}
      </AnimatePresence>
    </div>
  )
}

export default Airports
