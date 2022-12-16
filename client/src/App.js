import './App.css';
// import { initializeApp } from 'firebase/app';
// import { BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';

function App() {
  // const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
