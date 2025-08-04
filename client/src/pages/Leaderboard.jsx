import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Leaderboard() {
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get("/api/leaderboard.json");
        const sorted = res.data.sort((a, b) => b.donations - a.donations);
        setLeaderboard(sorted);
      } catch (err) {
        console.error("Failed to load leaderboard:", err);
        setLeaderboard([]);
      }
    };
    fetchLeaderboard();
  }, []);

  const getRankIcon = (index) =>
    index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex justify-center items-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl border border-white/30">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
            🏆 Top Interns
          </h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm text-indigo-600 hover:underline"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full text-sm sm:text-base text-left border-collapse">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs sm:text-sm">
              <tr>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4 text-right">Donations</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.length === 0 ? (
                <tr>
                  <td colSpan="3" className="text-center py-6 text-gray-400">
                    No data available.
                  </td>
                </tr>
              ) : (
                leaderboard.map((user, index) => (
                  <tr
                    key={user.name}
                    className="hover:bg-indigo-50 transition group relative"
                  >
                    <td className="py-3 px-4 font-semibold text-gray-700">
                      {getRankIcon(index)}
                    </td>
                    <td className="py-3 px-4">
                      <div className="relative inline-block cursor-pointer group">
                        <span className="text-gray-800 group-hover:text-indigo-700 transition">
                          {user.name}
                        </span>

                        {/* Tooltip on hover */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white text-sm text-gray-700 px-3 py-2 rounded-md shadow-lg z-10 border border-gray-200 whitespace-nowrap">
                          {user.name} has raised ₹{user.donations.toLocaleString()}!
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-right text-green-700 font-semibold">
                      ₹{user.donations.toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">Mock data</p>
      </div>
    </div>
  );
}
