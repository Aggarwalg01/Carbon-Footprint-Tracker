import './App.css';
import Dashboard from './dashboard/dashboard';
import FootprintDiv from './footprint-bar/footprintDiv';
import UserProfile from './user-profile/userProfile.js';

function App() {
  return (
    <div className="App">
      {/* <Dashboard />
      <FootprintDiv fillPercentage={50}/> */}
      <UserProfile /> 
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
