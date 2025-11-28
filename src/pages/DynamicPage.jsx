import React from "react";
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";

const DynamicPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.replace("/", "");
  const pageName = path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col items-center justify-center bg-linear-to-br from-green-50 via-green-100 to-green-50 p-8"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-10 text-center max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          {pageName}
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          {pageName} page will be available soon!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg
                     hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          ← Back to Home
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DynamicPage;