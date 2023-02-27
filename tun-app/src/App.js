import logo from './logo.svg';
import './App.css';
import {Route , Switch}  from 'react-router-dom';
import HomePage from './pages/HomePage';
import Tourism from './pages/Tourism';
import History from './pages/History';
import Culture from './pages/Culture';
import TnR from './pages/TnR';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component ={HomePage}/>
        <Route path="/tourism" component={Tourism} />
        <Route path="/history" component={History} />
        <Route path="/culture" component={Culture} />
        <Route path="/technology" component={TnR} />
      </Switch>
    </div>
    /*<Route path="/tourism" component={TourismPage} />
    <Route path="/history" component={HistoryPage} />
    <Route path="/culture" component={CulturePage} />
    <Route path="/technology" component={TechnologyPage} />*/
    
    
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
