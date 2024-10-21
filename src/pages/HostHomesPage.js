import React from 'react';
import PropertyCard from '../components/PropertyCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const propertyData = [
  {
    image: "https://via.placeholder.com/500x300",
    title: "Cozy Cottage",
    description: "A charming home in the countryside.",
  },
  {
    image: "https://via.placeholder.com/500x300",
    title: "Modern Apartment",
    description: "A sleek and stylish apartment in the city.",
  },
  // Add more properties here
];

const HostHomesPage = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {propertyData.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HostHomesPage;
