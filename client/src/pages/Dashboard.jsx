import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const navigate = useNavigate();
  const internName = localStorage.getItem("internName") || "Guest";
  const referralCode = `${internName.replace(/\s+/g, "").toLowerCase()}2025`;

  const [donations, setDonations] = useState(0);

  // currently generating a random number as mock data for donation and storing it in local storage to prevent randomising further
  useEffect(() => {
    const saved = localStorage.getItem("donationMock");
    if (saved) {
      setDonations(Number(saved));
    } else {
      const randomAmount = Math.floor(Math.random() * (25000 - 8000 + 1)) + 8000;
      setDonations(randomAmount);
      localStorage.setItem("donationMock", randomAmount);
    }
  }, []);

  // Static rewards thresholds
  const rewards = [
    { label: " Certificate of Appreciation", threshold: 5000 },
    { label: " Amazon Gift Card", threshold: 10000 },
    { label: " Completion Badge", threshold: 15000 },
    { label: " Bonus Swag Pack", threshold: 20000 },
  ];

  const unlockedCount = rewards.filter(r => donations >= r.threshold).length;

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-6 flex justify-center items-center">
      <div className="w-full max-w-5xl space-y-10">
        
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Welcome, {internName} 👋
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Here's your internship impact summary
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Referral Code */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all hover:scale-105">
            <h2 className="text-sm text-gray-600 mb-1">Referral Code</h2>
            <div className="bg-gray-100 text-indigo-700 text-center py-2 rounded font-mono text-lg">
              {referralCode}
            </div>
          </div>

          {/* Donations */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all hover:scale-105">
            <h2 className="text-sm text-gray-600 mb-1">Total Donations Raised</h2>
            <div className="text-center text-3xl font-bold text-green-600 mt-1">
              ₹{donations.toLocaleString()}
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transform transition-all hover:scale-105">
            <h2 className="text-sm text-gray-600 mb-2">Rewards & Unlockables</h2>
            <ul className="space-y-2 text-sm">
              {rewards.map((reward, idx) => {
                const unlocked = donations >= reward.threshold;
                return (
                  <li
                    key={idx}
                    className={`flex items-center justify-between transition-all ${
                      unlocked ? "text-green-700" : "text-gray-400"
                    }`}
                  >
                    <span
                      title={unlocked
                        ? "Unlocked!"
                        : `Unlock by raising ₹${reward.threshold.toLocaleString()}`}
                      className="cursor-help"
                    >
                      {unlocked ? "✅" : "🔒"} {reward.label}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        unlocked
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {unlocked ? "Unlocked" : "Locked"}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${(unlockedCount / rewards.length) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1 text-center">
                {unlockedCount} of {rewards.length} rewards unlocked
              </p>
            </div>
          </div>
        </div>

        {/* Leaderboard Button */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/leaderboard")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            View Leaderboard
          </Button>
        </div>
      </div>
    </div>
  );
}
