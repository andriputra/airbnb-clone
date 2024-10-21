import React from 'react';

const PropertyCard = ({ image, title, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="bg-blue-500 text-white p-2 rounded mt-3 w-full">View Property</button>
    </div>
  );
};

export default PropertyCard;
