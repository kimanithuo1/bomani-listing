import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  fetchHotels,
  fetchWeatherData,
  fetchPlacesData,
  fetchReviews 
} from '../services/api'

const Hotels = () => {
  const [hotels, setHotels] = useState([])
  const [selectedHotel, setSelectedHotel] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [nearbyPlaces, setNearbyPlaces] = useState([])
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1
  })
  const [filters, setFilters] = useState({
    priceRange: '',
    rating: '',
    amenities: []
  })

  useEffect(() => {
    const loadHotelsData = async () => {
      try {
        const hotelsData = await fetchHotels(searchParams)
        setHotels(hotelsData)
        setLoading(false)
      } catch (error) {
        console.error('Error loading hotels:', error)
        setLoading(false)
      }
    }
    loadHotelsData()
  }, [searchParams])

  useEffect(() => {
    if (selectedHotel) {
      const loadHotelDetails = async () => {
        try {
          const [weather, places, hotelReviews] = await Promise.all([
            fetchWeatherData(selectedHotel.latitude, selectedHotel.longitude),
            fetchPlacesData(`attractions near ${selectedHotel.name}`),
            fetchReviews(selectedHotel.id)
          ])
          setWeatherData(weather)
          setNearbyPlaces(places.results)
          setReviews(hotelReviews)
        } catch (error) {
          console.error('Error loading hotel details:', error)
        }
      }
      loadHotelDetails()
    }
  }, [selectedHotel])

  const handleBooking = async (hotelId, roomType) => {
    try {
      // Implement booking logic here
      console.log('Booking hotel:', hotelId, 'Room type:', roomType)
    } catch (error) {
      console.error('Error processing booking:', error)
    }
  }

  const HotelDetail = ({ hotel }) => (
    <motion.div 
      className="hotel-detail-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{hotel.name}</h2>
          <div className="hotel-rating">
            {'⭐'.repeat(hotel.rating)}
            <span className="review-count">({hotel.reviewCount} reviews)</span>
          </div>
          <button onClick={() => setSelectedHotel(null)} className="close-btn">×</button>
        </div>

        <div className="hotel-gallery">
          <motion.div className="gallery-grid">
            {hotel.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${hotel.name} - Image ${index + 1}`}
                whileHover={{ scale: 1.05 }}
                onClick={() => {/* Implement image gallery modal */}}
              />
            ))}
          </motion.div>
        </div>

        <div className="hotel-info-grid">
          <div className="main-info">
            <div className="description">
              <h3>About this property</h3>
              <p>{hotel.description}</p>
            </div>

            <div className="amenities">
              <h3>Property amenities</h3>
              <div className="amenities-grid">
                {hotel.amenities.map(amenity => (
                  <div key={amenity.name} className="amenity-item">
                    <i className={amenity.icon}></i>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="booking-section">
            <div className="price-info">
              <h3>Price per night</h3>
              <div className="price">${hotel.price}</div>
              <div className="price-includes">Includes taxes and fees</div>
            </div>

            <div className="booking-form">
              <div className="date-inputs">
                <input
                  type="date"
                  value={searchParams.checkIn}
                  onChange={(e) => setSearchParams({...searchParams, checkIn: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
                <input
                  type="date"
                  value={searchParams.checkOut}
                  onChange={(e) => setSearchParams({...searchParams, checkOut: e.target.value})}
                  min={searchParams.checkIn}
                />
              </div>

              <div className="guest-inputs">
                <select 
                  value={searchParams.guests}
                  onChange={(e) => setSearchParams({...searchParams, guests: e.target.value})}
                >
                  {[1,2,3,4].map(num => (
                    <option key={num} value={num}>{num} Guests</option>
                  ))}
                </select>
                <select
                  value={searchParams.rooms}
                  onChange={(e) => setSearchParams({...searchParams, rooms: e.target.value})}
                >
                  {[1,2,3].map(num => (
                    <option key={num} value={num}>{num} Rooms</option>
                  ))}
                </select>
              </div>

              <button 
                className="book-now-btn"
                onClick={() => handleBooking(hotel.id, 'standard')}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="location-section">
          <h3>Location</h3>
          <div className="map-container">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}&q=${encodeURIComponent(hotel.name)}`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {weatherData && (
            <div className="weather-widget">
              <h4>Local Weather</h4>
              <div className="weather-info">
                <span className="temperature">{Math.round(weatherData.main.temp)}°C</span>
                <span className="description">{weatherData.weather[0].description}</span>
              </div>
            </div>
          )}
        </div>

        <div className="nearby-places">
          <h3>Nearby Attractions</h3>
          <div className="places-grid">
            {nearbyPlaces.map(place => (
              <motion.div 
                key={place.id}
                className="place-card"
                whileHover={{ scale: 1.05 }}
              >
                <img src={place.photo_url} alt={place.name} />
                <h4>{place.name}</h4>
                <p>{place.distance} away</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="reviews-section">
          <h3>Guest Reviews</h3>
          <div className="reviews-grid">
            {reviews.map(review => (
              <motion.div 
                key={review.id}
                className="review-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="review-header">
                  <span className="reviewer">{review.author}</span>
                  <span className="review-date">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
                <p className="review-text">{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading hotels...</p>
      </div>
    )
  }

  return (
    <div className="hotels-page">
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search location..."
          value={searchParams.location}
          onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
          className="search-input"
        />
        
        <select
          value={filters.priceRange}
          onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
          className="price-filter"
        >
          <option value="">All Prices</option>
          <option value="budget">Budget</option>
          <option value="mid">Mid-range</option>
          <option value="luxury">Luxury</option>
        </select>

        <select
          value={filters.rating}
          onChange={(e) => setFilters({...filters, rating: e.target.value})}
          className="rating-filter"
        >
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
        </select>
      </div>

      <div className="hotels-grid">
        {hotels.map(hotel => (
          <motion.div
            key={hotel.id}
            className="hotel-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedHotel(hotel)}
          >
            <img src={hotel.mainImage} alt={hotel.name} />
            <div className="hotel-card-content">
              <h3>{hotel.name}</h3>
              <div className="hotel-rating">
                {'⭐'.repeat(hotel.rating)}
                <span className="review-count">({hotel.reviewCount})</span>
              </div>
              <p className="location">{hotel.location}</p>
              <p className="price">From ${hotel.price} per night</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedHotel && <HotelDetail hotel={selectedHotel} />}
      </AnimatePresence>
    </div>
  )
}

export default Hotels
