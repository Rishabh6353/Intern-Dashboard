const express = require("express");
const router = express.Router();

const login = async (req, res) => {
  let { name } = req.body;
  name = name?.trim();

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  return res.status(200).json({
    token: "dummy",
    name,
    message: "Login successful",
  });
};

const signup = async (req, res) => {
  let { name } = req.body;
  name = name?.trim();

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  return res.status(200).json({
    token: "dummy",
    name,
    message: "Signup successful",
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
