import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  fetchCountries, 
  fetchWeatherData, 
  fetchExchangeRates,
  fetchEvents,
  fetchPlacesData 
} from '../services/api'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [exchangeRates, setExchangeRates] = useState(null)
  const [events, setEvents] = useState([])
  const [attractions, setAttractions] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')

  useEffect(() => {
    const loadCountriesData = async () => {
      try {
        const countriesData = await fetchCountries()
        setCountries(countriesData)
        setLoading(false)
      } catch (error) {
        console.error('Error loading countries:', error)
        setLoading(false)
      }
    }
    loadCountriesData()
  }, [])

  useEffect(() => {
    if (selectedCountry) {
      const loadCountryDetails = async () => {
        try {
          const [weather, rates, countryEvents, places] = await Promise.all([
            fetchWeatherData(selectedCountry.coordinates.lat, selectedCountry.coordinates.lng),
            fetchExchangeRates(selectedCountry.currencies[0].code),
            fetchEvents(selectedCountry.capital),
            fetchPlacesData(`tourist attractions in ${selectedCountry.name}`)
          ])
          setWeatherData(weather)
          setExchangeRates(rates)
          setEvents(countryEvents.events)
          setAttractions(places.results)
        } catch (error) {
          console.error('Error loading country details:', error)
        }
      }
      loadCountryDetails()
    }
  }, [selectedCountry])

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true
    return matchesSearch && matchesRegion
  })

  const CountryDetail = ({ country }) => (
    <motion.div 
      className="country-detail-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{country.name.common}</h2>
          <button onClick={() => setSelectedCountry(null)} className="close-btn">×</button>
        </div>

        <div className="country-overview">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-flag" />
          
          {weatherData && (
            <div className="weather-widget">
              <h3>Current Weather in {country.capital}</h3>
              <div className="weather-info">
                <p>{Math.round(weatherData.main.temp)}°C</p>
                <p>{weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
              </div>
            </div>
          )}
        </div>

        <div className="country-details-grid">
          <div className="info-section">
            <h3>General Information</h3>
            <ul>
              <li><strong>Capital:</strong> {country.capital}</li>
              <li><strong>Region:</strong> {country.region}</li>
              <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
              <li><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</li>
              <li><strong>Area:</strong> {country.area.toLocaleString()} km²</li>
            </ul>
          </div>

          {exchangeRates && (
            <div className="currency-section">
              <h3>Currency Information</h3>
              <div className="exchange-rates">
                <p><strong>{Object.keys(country.currencies)[0]}:</strong></p>
                <ul>
                  <li>USD: {exchangeRates.rates.USD}</li>
                  <li>EUR: {exchangeRates.rates.EUR}</li>
                  <li>GBP: {exchangeRates.rates.GBP}</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {attractions.length > 0 && (
          <div className="attractions-section">
            <h3>Popular Attractions</h3>
            <div className="attractions-grid">
              {attractions.map(attraction => (
                <motion.div 
                  key={attraction.place_id}
                  className="attraction-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={attraction.photos?.[0].photo_reference 
                      ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${attraction.photos[0].photo_reference}&key=${import.meta.env.VITE_GOOGLE_PLACES_API_KEY}`
                      : '/placeholder-image.jpg'
                    } 
                    alt={attraction.name}
                  />
                  <h4>{attraction.name}</h4>
                  <p>{attraction.rating} ⭐ ({attraction.user_ratings_total} reviews)</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {events.length > 0 && (
          <div className="events-section">
            <h3>Upcoming Events</h3>
            <div className="events-grid">
              {events.map(event => (
                <motion.div 
                  key={event.id}
                  className="event-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4>{event.name.text}</h4>
                  <p>{new Date(event.start.local).toLocaleDateString()}</p>
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )

  if (loading) {
    return <div className="loading">Loading countries...</div>
  }

  return (
    <div className="countries-page">
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="region-filter"
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="countries-grid">
        {filteredCountries.map(country => (
          <motion.div
            key={country.cca3}
            className="country-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCountry(country)}
          >
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
            <h3>{country.name.common}</h3>
            <p>{country.capital}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCountry && <CountryDetail country={selectedCountry} />}
      </AnimatePresence>
    </div>
  )
}

export default Countries
