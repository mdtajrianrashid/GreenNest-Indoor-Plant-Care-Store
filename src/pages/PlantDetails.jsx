import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedPlant = data.find((p) => p.plantId === parseInt(id));
        setPlant(selectedPlant || null);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!name || !email) {
    toast.error("Please fill in all fields");
    return;
  }
  toast.success(`Consultation booked for ${plant.plantName}!`);
  setName("");
  setEmail("");
};

  if (loading) return <div className="text-center mt-20">Loading plant details...</div>;
  if (!plant) return <div className="text-center mt-20">Plant not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-12">
      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow"
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-green-800">{plant.plantName}</h1>
          <p className="text-gray-700">{plant.description}</p>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-green-700 text-lg">${plant.price}</span>
            <span className="text-yellow-500 font-semibold">⭐ {plant.rating}</span>
            <span className="text-gray-500">Stock: {plant.availableStock}</span>
          </div>
          <p className="text-sm text-gray-500">Provided by: {plant.providerName}</p>
          <p className="text-sm text-gray-500">Care Level: {plant.careLevel}</p>
        </div>
      </div>

<div className="bg-linear-to-b from-green-50 to-white p-6 md:p-8 rounded-2xl shadow-xl max-w-lg w-full mx-auto">
  <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
    Book Consultation
  </h2>

  <form onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label className="block text-gray-700 font-semibold mb-2">Name</label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full border border-green-300 bg-white text-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div>
      <label className="block text-gray-700 font-semibold mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full border border-green-300 bg-white text-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-3 rounded-lg shadow-md"
    >
      Book Now
    </button>
  </form>
</div>
    </div>
  );
};

export default PlantDetails;