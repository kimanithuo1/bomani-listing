import React from 'react';
import ListingCard from './ListingCard';
import '../styles/styles.css';

const Home = () => {
  const sampleListings = [...Array(6)].map((_, i) => ({
    title: `Cozy Apartment ${i + 1}`,
    location: 'Nairobi, Kenya',
    price: 50,
    image: `https://via.placeholder.com/400x250?text=Listing+${i + 1}`,
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-teal text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Kenya's Premier Hosting Platform</h1>
        <p className="mt-4 text-lg">Find your perfect stay or list your property today!</p>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search by location"
            className="p-3 rounded-l-md border-0 focus:outline-none"
          />
          <button className="p-3 bg-yellow text-teal rounded-r-md font-semibold">
            Search
          </button>
        </div>
      </section>
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleListings.map((listing, i) => (
            <ListingCard key={i} {...listing} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
