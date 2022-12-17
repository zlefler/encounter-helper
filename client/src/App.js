import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterBuilder from './components/CharacterBuilder';
import Login from './components/Login';
import Signup from './components/Signup';
import DiceRoller from './components/DiceRoller';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/edit_character" element={<CharacterBuilder />} />

        <Route path="/diceroller" element={<DiceRoller />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
