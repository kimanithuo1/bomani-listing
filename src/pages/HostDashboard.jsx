import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const HostDashboard = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    price: '',
    description: '',
  });
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data
    const newListing = {
      ...formData,
      price: parseInt(formData.price, 10),
      images,
    };

    try {
      // Send data to the API
      await axios.post('http://localhost:5000/listings', newListing);
      alert('Listing added successfully!');
      setFormData({ title: '', location: '', price: '', description: '' });
      setImages([]);
    } catch (error) {
      console.error('Error adding listing:', error);
      alert('Failed to add listing. Please try again.');
    }
  };

  return (
    <div className="bg-seaGreen py-8 px-6">
      <h2 className="text-3xl font-bold text-white text-center mb-8">Host Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Add a New Listing</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              className="w-full p-2 border rounded"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              className="w-full p-2 border rounded"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              className="w-full p-2 border rounded"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              className="w-full p-2 border rounded"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Images</label>
            <input
              type="file"
              multiple
              className="w-full p-2 border rounded"
              onChange={handleImageUpload}
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-teal text-white rounded hover:bg-mintGreen"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HostDashboard;
