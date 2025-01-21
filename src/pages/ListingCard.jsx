import React from 'react';

const ListingCard = ({ title, location, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="mt-2 text-lg font-semibold">${price}/night</p>
        <button className="mt-4 w-full bg-teal text-white py-2 rounded hover:bg-yellow">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
