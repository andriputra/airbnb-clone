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
        className="w-full p-3 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded w-full">
        Start Hosting
      </button>
    </form>
  );
};

export default Form;
