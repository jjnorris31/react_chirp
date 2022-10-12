import logo from './logo.svg';
import './App.css';
import LandingMiniCard from "./components/landingMiniCard";
import ChartCard from "./components/chartCard";

function App() {
  return (
    <div className="App-container">
      <div className="impressions-container">
          <ChartCard className="App-mb-2"></ChartCard>
          <LandingMiniCard title={'Impressions'}
                           className="App-mb-2"
                           text={'times people saw this Tweet on Twitter'}>
          </LandingMiniCard>
          <LandingMiniCard title={'Total engagement'}
                           text={'times people interacted with this Tweet'}>
          </LandingMiniCard>
      </div>
    </div>
  );
}

export default App;
