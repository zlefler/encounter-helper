import './App.css';
// import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import CharacterBuilder from './components/CharacterBuilder';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <CharacterBuilder />
    </div>
  );
}

export default App;
