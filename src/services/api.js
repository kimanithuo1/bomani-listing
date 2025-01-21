import axios from 'axios';

// Base API configuration
const api = axios.create({
  baseURL: 'https://example.com/api', // Replace with your API base URL
});

// Fetch listings
export const fetchListings = async () => {
  const response = await api.get('/listings');
  return response.data;
};

// Fetch listing details by ID
export const fetchListingDetails = async (id) => {
  const response = await api.get(`/listings/${id}`);
  return response.data;
};

// Submit a new listing
export const submitListing = async (data) => {
  const response = await api.post('/listings', data);
  return response.data;
};
