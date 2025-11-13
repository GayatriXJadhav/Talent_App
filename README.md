# Talent APP
A full-stack application for managing and viewing talents, built with React.js, Redux, Node.js, Express, and MongoDB.

Project Structure
Talent_App/
├── backend/           # Node.js + Express backend
│   ├── routes/
│   ├── models/
│   ├── server.js
│   └── .env
└── client/            # React frontend
    ├── src/
    ├── public/
    ├── vite.config.js
    └── package.json


Setup Instructions
Backend

1) Clone the repository:
  git clone <repo-link>
  cd Talent_App/backend
2) Install dependencies:
  npm install
3)Create a .env file with the following variables:
  MONGO_URI=<your-mongodb-connection-string>
  PORT=5000
4)Start the server:
   npm start
   The backend will run on http://localhost:5000.

API Endpoints:
-GET /api/talents → Fetch all talents
-POST /api/talents → Add a new talent
-GET /api/talents?skill=<skill> → Filter talents by skill


Frontend
1)Go to the frontend folder:
 cd ../client
2)Install dependencies:
 npm install

3)Create a .env file with:
  VITE_API_BASE_URL=http://localhost:5000

4)Run the development server:
  npm run dev
The app will run on http://localhost:5173.
Build for production:
npm run build
The production build will be in dist/.

Features
-Display a list of talents with skills, experience, and creation date.
-Filter talents by skill.
-Add new talents via API.
-Backend API hosted on Render: https://talent-app.onrender.com/api/talents
-Frontend hosted on Render: https://talent-app-1.onrender.com/
