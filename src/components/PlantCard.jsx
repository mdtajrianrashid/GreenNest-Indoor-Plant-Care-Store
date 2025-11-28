import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PlantCard = ({ plant }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleViewDetails = () => {
    if (user) {
      navigate(`/plants/${plant.plantId}`);
    } else {
      navigate("/login", { state: { from: `/plants/${plant.plantId}` } });
    }
  };

  return (
    <div className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow" data-aos="fade-up" data-aos-delay="200">
      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full object-contain"
      />
      <div className="p-4">
        <h3 className="font-semibold text-green-800 text-lg">{plant.plantName}</h3>
        <p className="text-gray-700 text-sm mt-1">{plant.category}</p>
        <p className="text-gray-900 font-bold mt-2">${plant.price}</p>
        <p className="text-yellow-500 mt-1">⭐ {plant.rating}</p>
        <button
          onClick={handleViewDetails}
          className="btn btn-success btn-sm mt-3 w-full normal-case"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlantCard;