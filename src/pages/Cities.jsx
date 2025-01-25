import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  fetchPlacesData, 
  fetchWeatherData, 
  fetchRestaurants, 
  fetchEvents,
  fetchHotels 
} from '../services/api'

const Cities = () => {
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [restaurants, setRestaurants] = useState([])
  const [events, setEvents] = useState([])
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const loadCitiesData = async () => {
      try {
        const majorCities = await fetchPlacesData('major cities in East Africa')
        setCities(majorCities.results)
        setLoading(false)
      } catch (error) {
        console.error('Error loading cities:', error)
        setLoading(false)
      }
    }
    loadCitiesData()
  }, [])

  useEffect(() => {
    if (selectedCity) {
      const loadCityDetails = async () => {
        try {
          const [weather, cityRestaurants, cityEvents, cityHotels] = await Promise.all([
            fetchWeatherData(selectedCity.geometry.location.lat, selectedCity.geometry.location.lng),
            fetchRestaurants(selectedCity.name),
            fetchEvents(selectedCity.name),
            fetchHotels(selectedCity.name)
          ])
          setWeatherData(weather)
          setRestaurants(cityRestaurants.businesses)
          setEvents(cityEvents.events)
          setHotels(cityHotels.data)
        } catch (error) {
          console.error('Error loading city details:', error)
        }
      }
      loadCityDetails()
    }
  }, [selectedCity])

  const CityDetail = ({ city }) => (
    <motion.div 
      className="city-detail-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{city.name}</h2>
          <button onClick={() => setSelectedCity(null)} className="close-btn">×</button>
        </div>

        <div className="city-overview">
          <img 
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${city.photos[0].photo_reference}&key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}`}
            alt={city.name}
            className="city-main-image"
          />
          
          {weatherData && (
            <div className="weather-widget">
              <h3>Current Weather</h3>
              <div className="weather-info">
                <div className="temperature">
                  <span className="temp-value">{Math.round(weatherData.main.temp)}°C</span>
                  <span className="weather-description">{weatherData.weather[0].description}</span>
                </div>
                <div className="weather-details">
                  <p>Humidity: {weatherData.main.humidity}%</p>
                  <p>Wind: {weatherData.wind.speed} m/s</p>
                  <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="city-sections">
          <div className="hotels-section">
            <h3>Popular Hotels</h3>
            <div className="hotels-grid">
              {hotels.slice(0, 6).map(hotel => (
                <motion.div 
                  key={hotel.id}
                  className="hotel-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={hotel.photo_url} alt={hotel.name} />
                  <div className="hotel-info">
                    <h4>{hotel.name}</h4>
                    <div className="rating">{'⭐'.repeat(Math.round(hotel.rating))}</div>
                    <p className="price">From ${hotel.price_level} per night</p>
                    <button className="book-btn">View Details</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="restaurants-section">
            <h3>Top Restaurants</h3>
            <div className="restaurants-grid">
              {restaurants.slice(0, 6).map(restaurant => (
                <motion.div 
                  key={restaurant.id}
                  className="restaurant-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={restaurant.image_url} alt={restaurant.name} />
                  <div className="restaurant-info">
                    <h4>{restaurant.name}</h4>
                    <p>{restaurant.categories[0].title}</p>
                    <div className="rating">
                      {restaurant.rating} ⭐ ({restaurant.review_count} reviews)
                    </div>
                    <p className="price">{restaurant.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="events-section">
            <h3>Upcoming Events</h3>
            <div className="events-grid">
              {events.slice(0, 6).map(event => (
                <motion.div 
                  key={event.id}
                  className="event-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={event.image_url} alt={event.name} />
                  <div className="event-info">
                    <h4>{event.name}</h4>
                    <p className="date">{new Date(event.start_date).toLocaleDateString()}</p>
                    <p className="venue">{event.venue.name}</p>
                    <a href={event.url} target="_blank" rel="noopener noreferrer" className="event-link">
                      Get Tickets
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="map-section">
            <h3>Location</h3>
            <div className="map-container">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&q=${encodeURIComponent(city.name)}`}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading cities...</p>
      </div>
    )
  }

  return (
    <div className="cities-page">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search cities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="cities-grid">
        {cities
          .filter(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map(city => (
            <motion.div
              key={city.place_id}
              className="city-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCity(city)}
            >
              <img 
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${city.photos[0].photo_reference}&key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}`}
                alt={city.name}
              />
              <div className="city-card-content">
                <h3>{city.name}</h3>
                <p>{city.formatted_address}</p>
                <div className="city-rating">
                  {city.rating} ⭐ ({city.user_ratings_total} reviews)
                </div>
                <button className="explore-btn">Explore City</button>
              </div>
            </motion.div>
          ))}
      </div>

      <AnimatePresence>
        {selectedCity && <CityDetail city={selectedCity} />}
      </AnimatePresence>
    </div>
  )
}

export default Cities

