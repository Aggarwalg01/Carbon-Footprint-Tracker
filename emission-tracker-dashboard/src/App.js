import './App.css';
import Dashboard from './dashboard/dashboard';
import FootprintDiv from './footprint-bar/footprintDiv';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <FootprintDiv fillPercentage={50}/>
    </div>
  );
}

export default App;
