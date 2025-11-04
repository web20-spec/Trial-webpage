import React from "react";

function ProfileCard({ name, age, location, image }) {
  return (
    <div className="border rounded-2xl p-4 w-60 text-center shadow-md bg-white">
      <img 
        src={image} 
        alt={name} 
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
      <p className="text-gray-500">{location}</p>
    </div>
  );
}

export default ProfileCard;
