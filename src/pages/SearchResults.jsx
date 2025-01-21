import React, { useEffect, useState } from 'react';
import listingsData from '../data/listings.json';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const ITEMS_PER_PAGE = 6;

const SearchResults = () => {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setListings(listingsData);
  }, []);

  // Filter and Sort Listings
  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedListings = filteredListings.sort((a, b) => {
    if (sort === 'priceLowToHigh') return a.price - b.price;
    if (sort === 'priceHighToLow') return b.price - a.price;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedListings.length / ITEMS_PER_PAGE);
  const paginatedListings = sortedListings.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bg-mintGreen py-8 px-6">
      <h2 className="text-3xl font-bold text-teal text-center mb-8">Search Results</h2>
      <div className="mb-6">
        <input
          type="text"
          className="w-full p-3 border rounded"
          placeholder="Search listings..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <select
          className="p-3 border rounded w-full"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Sort by</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedListings.map((listing) => (
          <Link
            to={`/details/${listing.id}`}
            key={listing.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg"
          >
            <img
              src={listing.images[0]}
              alt={listing.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{listing.title}</h3>
              <p className="text-sm text-gray-600">{listing.location}</p>
              <p className="mt-2 text-lg font-semibold">KES {listing.price}/night</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === page + 1 ? 'bg-teal text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
