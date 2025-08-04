import './index.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Authentication from '../src/pages/Authentication';
import Dashboard from '../src/pages/Dashboard'
import Leaderboard from '../src/pages/Leaderboard'
import Notfound from '../src/pages/Notfound'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
           <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;