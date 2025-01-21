import axios from "axios"

const API_BASE_URL = "https://api.example.com" // Replace with your actual API base URL

export const fetchListings = async (searchParams) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/listings`, { params: searchParams })
    return response.data
  } catch (error) {
    console.error("Error fetching listings:", error)
    throw error
  }
}

export const fetchPropertyDetails = async (propertyId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/properties/${propertyId}`)
    return response.data
  } catch (error) {
    console.error("Error fetching property details:", error)
    throw error
  }
}

