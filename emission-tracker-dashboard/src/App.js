import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Dashboard from './dashboard/dashboard.js';
import UserProfile from './user-profile/userProfile.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
