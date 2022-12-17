import './App.css';
// import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Home />
    </div>
  );
}

export default App;
