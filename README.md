# 🎓 Intern Dashboard – MERN Stack Demo Project

An interactive, responsive **Intern Dashboard** built using the **MERN stack** (MongoDB, Express, React, Node.js). This project demonstrates a dummy login/signup system, a dashboard with static referral and donation data, and an optional leaderboard — perfect for learning full-stack basics!

---

## ⚙️ Features Overview

### 📌 Frontend (React + Vite)
- 🧑‍💼 **Dummy Login/Signup** page (no real authentication)
- 📊 **Dashboard** that displays:
  - Intern name (from form input)
  - Dummy referral code (e.g., `yourname2025`)
  - Total donations raised (randomized or static from backend)
  - Rewards & unlockables (static milestones)
- 🏆 **Leaderboard Page** showing dummy donation rankings

### 📌 Backend (Node.js + Express)
- REST API endpoints:
  - `POST /api/users/login` – accepts name, returns token + name
  - `POST /api/users/signup` – accepts name, returns token + name
  - `GET /api/users/dashboard` – returns donation and rewards data
  - `GET /api/users/leaderboard` – returns static leaderboard data
- Data is mocked/static — no real database operations required
- MongoDB connected (but not required for functionality)

---

## 🧠 Tech Stack

| Layer       | Technology     |
|-------------|----------------|
| Frontend    | React + Vite + TailwindCSS |
| Backend     | Node.js + Express |
| Database    | MongoDB (optional, used for deployment config) |
| Deployment  | Render (both frontend and backend separately) |

---

# 🎓 Intern Dashboard – MERN Stack Demo Project

An interactive, responsive **Intern Dashboard** built using the **MERN stack** (MongoDB, Express, React, Node.js). This project demonstrates a dummy login/signup system, a dashboard with static referral and donation data, and an optional leaderboard — perfect for learning full-stack basics.

---

## ⚙️ Features Overview

### 📌 Frontend (React + Vite)
- 🧑‍💼 **Dummy Login/Signup** page (no real authentication)
- 📊 **Dashboard** that displays:
  - Intern name (from form input)
  - Dummy referral code (e.g., `yourname2025`)
  - Total donations raised (randomized or static from backend)
  - Rewards & unlockables (static milestones)
- 🏆 **Leaderboard Page** showing dummy donation rankings

### 📌 Backend (Node.js + Express)
- REST API endpoints:
  - `POST /api/users/login` – accepts name, returns token + name
  - `POST /api/users/signup` – accepts name, returns token + name
  - `GET /api/users/dashboard` – returns donation and rewards data
  - `GET /api/users/leaderboard` – returns static leaderboard data
- Data is mocked/static — no real database operations required
- MongoDB connected (but not required for functionality)

---

## 🧠 Tech Stack

| Layer       | Technology     |
|-------------|----------------|
| Frontend    | React + Vite + TailwindCSS |
| Backend     | Node.js + Express |
| Database    | MongoDB (optional, used for deployment config) |
| Deployment  | Render (both frontend and backend separately) |

---

## 🛠️ How to Run Locally

### 📦 Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas; optional since data is static)
- npm or yarn

---


### 🚀 Setup Instructions

#### 1.  **Clone the repository**

`git clone https://github.com/your-username/intern-dashboard.git
cd intern-dashboard


#### 2. **Backend Setup**
bash
Copy
Edit
cd server
npm install
✅ Create a .env file inside the server/ folder with the following content:

env
Copy
Edit
MONGO_URL=your-mongodb-uri-if-applicable
CLIENT_URL=http://localhost:5173
You can use a placeholder MongoDB URI or leave it unused since the data is static.

✅ Start the backend server:

bash
Copy
Edit
npm start
The backend will run on: http://localhost:3000

#### 3. **Frontend Setup**
bash
Copy
Edit
cd ../client
npm install
✅ Create a .env file inside the client/ folder with the following content:

env
Copy
Edit
VITE_SERVER_URL=http://localhost:3000
✅ Start the frontend development server:

bash
Copy
Edit
npm run dev
The frontend will run on: http://localhost:5173

#### 4. Usage
Open http://localhost:5173 in your browser

Enter a name on the login/signup page

You'll be taken to the dashboard with your dummy referral code and donation summary

Click "View Leaderboard" to access a static ranking page

🔍 API Endpoints (for testing)
Use Postman or any REST client to test these endpoints:

Endpoint	Method	Description
/api/users/login	POST	Accepts { name }, returns name, token
/api/users/signup	POST	Accepts { name }, returns name, token
/api/users/dashboard	GET	Returns static donation and reward data
/api/users/leaderboard	GET	Returns dummy leaderboard data

🌐 **Deployment Notes**
This project is designed to deploy on Render:

Frontend (Static Site):
Root Directory: client/

Build Command: npm install && npm run build

Publish Directory: build

Add _redirects file in client/public with:

bash
Copy
Edit
/*    /index.html   200
Backend (Web Service):
Root Directory: server/

Build Command: npm install

Start Command: npm start

Environment Variables: MONGO_URL, CLIENT_URL`

👏 Acknowledgments

Built with the intent to learn and demonstrate core MERN stack skills.

👤 Author
Rishabh
Built with ❤️ as part of a learning journey.
