import React, { useState } from 'react';

const Form = () => {
  const [propertyName, setPropertyName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property Name: ", propertyName);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Property Name"
        value={propertyName}
        onChange={(e) => setPropertyName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-full focus:outline-none"
      />
      <button type="submit" className="bg-gray-900 text-white p-2 rounded w-full">
        Update your estimate
      </button>
    </form>
  );
};

export default Form;
