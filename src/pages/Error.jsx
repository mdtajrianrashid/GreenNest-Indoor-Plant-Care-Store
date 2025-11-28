import React from "react";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-4">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-72 h-72 bg-green-200 rounded-full opacity-50 animate-pulse -top-16 -left-16"></div>
        <div className="absolute w-96 h-96 bg-green-300 rounded-full opacity-40 animate-ping -bottom-32 -right-32"></div>
      </div>
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center animate-fadeIn">
        <h1 className="text-6xl font-extrabold text-green-700 mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}