import logo from './logo.svg';
import './App.css';
import LandingMiniCard from "./components/landingMiniCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LandingMiniCard title={'Impressions'}
                         className="App-mb-2"
                         text={'times people saw this Tweet on Twitter'}>
        </LandingMiniCard>
        <LandingMiniCard title={'Impressions'}
                         text={'times people saw this Tweet on Twitter'}>
        </LandingMiniCard>
      </header>
    </div>
  );
}

export default App;
