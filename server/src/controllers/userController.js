const express = require("express");
const router = express.Router();

const login = async (req, res) => {
  const { name } = req.body;
  return res.status(200).json({
    token: "dummy",
    name: name || "Guest",
    message: "Login successful",
  });
};

const signup = async (req, res) => {
  const { name } = req.body;
  return res.status(200).json({
    token: "dummy",
    name: name || "Guest",
    message: "Login successful",
  });
};

const dashboard = async (req, res) => {
  return res.status(200).json({
    name: "Intern Name",
    referralCode: "yourname2025",
    totalDonations: 10000,
    rewards: ["Reward 1", "Reward 2", "Reward 3"],
  });
};

const leaderboard = async (req, res) => {
    return res.status(200).json([
        { name: "Ajay", totalDonations: 2200 },
        { name: "Pratham", totalDonations: 1500 },
        { name: "Aman", totalDonations: 1100 }
    ]);
};
module.exports = { login, signup, dashboard, leaderboard };
