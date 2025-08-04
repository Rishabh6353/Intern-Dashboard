// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-red-100 to-yellow-100 p-6">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
}
