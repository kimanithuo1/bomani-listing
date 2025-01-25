import axios from "axios"

// Base URLs
const OPENTRIP_BASE_URL = 'https://api.opentripmap.com/0.1/en'
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5'
const COUNTRIES_BASE_URL = 'https://restcountries.com/v3.1'
const EXCHANGE_BASE_URL = 'https://open.er-api.com/v6'

// Listings API
export const fetchListings = async (searchParams) => {
  const mockListings = {
    data: [
      {
        id: 1,
        title: "Luxury Apartment in Nairobi",
        location: "Nairobi, Kenya",
        price: 200,
        rating: 4.5,
        image: "/images/listing1.jpg",
        amenities: ["WiFi", "Pool", "Parking"]
      },
      {
        id: 2,
        title: "Beachfront Villa in Mombasa",
        location: "Mombasa, Kenya",
        price: 350,
        rating: 4.8,
        image: "/images/listing2.jpg",
        amenities: ["Beach Access", "WiFi", "Kitchen"]
      }
    ]
  }
  return mockListings
}

// Countries API
export const fetchCountries = async () => {
  const response = await axios.get(`${COUNTRIES_BASE_URL}/all`)
  return response.data
}

// Weather API
export const fetchWeatherData = async (lat, lon) => {
  const response = await axios.get(`${WEATHER_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`)
  return response.data
}

// Places API
export const fetchPlacesData = async (query) => {
  const response = await axios.get(`${OPENTRIP_BASE_URL}/places/geoname?name=${query}&apikey=${import.meta.env.VITE_OPENTRIP_API_KEY}`)
  return response.data
}

// Restaurants API
export const fetchRestaurants = async (location) => {
  const response = await axios.get(`${OPENTRIP_BASE_URL}/places/radius?radius=5000&kinds=restaurants&format=json&apikey=${import.meta.env.VITE_OPENTRIP_API_KEY}&lat=${location.lat}&lon=${location.lon}`)
  return {
    businesses: response.data.map(restaurant => ({
      id: restaurant.xid,
      name: restaurant.name,
      rating: restaurant.rate || 4.0,
      image_url: restaurant.image || '/images/restaurant-placeholder.jpg',
      categories: [{ title: restaurant.kinds.split(',')[0] }],
      review_count: restaurant.reviews || 50,
      price: '$$'
    }))
  }
}

// Exchange Rates API
export const fetchExchangeRates = async (baseCurrency) => {
  const response = await axios.get(`${EXCHANGE_BASE_URL}/latest/${baseCurrency}`)
  return response.data
}

// Events API
export const fetchEvents = async (location) => {
  return {
    events: [
      {
        id: 1,
        name: "Cultural Festival",
        date: new Date().toISOString(),
        location: "City Center",
        description: "Annual cultural celebration"
      },
      {
        id: 2,
        name: "Food Festival",
        date: new Date().toISOString(),
        location: "Central Park",
        description: "Local cuisine showcase"
      }
    ]
  }
}

// Hotels API
export const fetchHotels = async (searchParams) => {
  return {
    data: [
      {
        id: 1,
        name: "Luxury Hotel",
        rating: 4.5,
        price: 200,
        image_url: "/images/hotel1.jpg",
        description: "Experience luxury in the heart of the city",
        amenities: ["Pool", "Spa", "Restaurant"]
      },
      {
        id: 2,
        name: "Boutique Hotel",
        rating: 4.3,
        price: 150,
        image_url: "/images/hotel2.jpg",
        description: "Charming boutique experience",
        amenities: ["WiFi", "Restaurant", "Bar"]
      }
    ]
  }
}

// Flight Data API
export const fetchFlightData = async (airportCode) => {
  return {
    departures: [
      {
        flight_number: "KQ101",
        destination: "Nairobi",
        scheduled_time: "09:00",
        status: "On Time",
        airline: "Kenya Airways"
      },
      {
        flight_number: "ET202",
        destination: "Addis Ababa",
        scheduled_time: "10:30",
        status: "Delayed",
        airline: "Ethiopian Airlines"
      }
    ],
    arrivals: [
      {
        flight_number: "KQ102",
        origin: "Mombasa",
        scheduled_time: "11:00",
        status: "Landed",
        airline: "Kenya Airways"
      },
      {
        flight_number: "RW303",
        origin: "Kigali",
        scheduled_time: "12:30",
        status: "On Time",
        airline: "RwandAir"
      }
    ]
  }
}

// Transport Data API
export const fetchTransportData = async (locationId) => {
  return [
    {
      id: 1,
      type: "Taxi",
      price_range: "$10-20",
      duration: "25 mins",
      providers: [
        { id: 1, name: "Uber", logo: "/images/uber.png" },
        { id: 2, name: "Bolt", logo: "/images/bolt.png" }
      ]
    },
    {
      id: 2,
      type: "Bus",
      price_range: "$2-5",
      duration: "45 mins",
      providers: [
        { id: 3, name: "City Bus", logo: "/images/citybus.png" }
      ]
    }
  ]
}

// Reviews API
export const fetchReviews = async (placeId) => {
  return {
    data: [
      {
        id: 1,
        author: "John D.",
        rating: 5,
        comment: "Excellent service and facilities",
        date: new Date().toISOString()
      },
      {
        id: 2,
        author: "Sarah M.",
        rating: 4,
        comment: "Great location and friendly staff",
        date: new Date().toISOString()
      }
    ]
  }
}

// Property Details API
export const fetchPropertyDetails = async (propertyId) => {
  return {
    id: propertyId,
    title: "Luxury Property",
    description: "Beautiful property with amazing views",
    amenities: ["Pool", "Gym", "WiFi"],
    images: ["/images/property1.jpg", "/images/property2.jpg"],
    location: {
      address: "123 Main Street",
      city: "Nairobi",
      country: "Kenya",
      coordinates: {
        lat: -1.2921,
        lng: 36.8219
      }
    }
  }
}
