import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";
import { motion } from "framer-motion";

const Profile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setMessage("✅ Profile updated successfully!");
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      setMessage("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const avatarText =
    user?.displayName?.slice(0, 2)?.toUpperCase() ||
    user?.email?.slice(0, 2)?.toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-green-50 to-white px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-green-100"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          My Profile
        </h2>

        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-green-500 shadow-md"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-green-600 text-white text-3xl font-bold mb-3">
              {avatarText}
            </div>
          )}

          <h3 className="text-xl font-semibold text-gray-800">
            {user?.displayName || "No Name"}
          </h3>
          <p className="text-gray-600">{user?.email}</p>
        </motion.div>

        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-all duration-300 shadow-md"
          >
            {loading ? "Updating..." : "Update Profile"}
          </motion.button>

          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center mt-3 ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Profile;