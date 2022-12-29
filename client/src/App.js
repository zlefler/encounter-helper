import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterBuilder from './components/CharacterBuilder';
import Login from './components/Login';
import Signup from './components/Signup';
import DiceRoller from './components/DiceRoller';
import CharacterPicker from './components/CharacterPicker';
import Navbar from './components/Navbar';
import Name from './components/Name';

// TODO: Make data persist when building character on front end

// TODO: Refactor Skills like you did Abilities

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/edit_character" element={<CharacterBuilder />} />

        <Route path="/diceroller" element={<DiceRoller />} />

        <Route path="/character_name" element={<Name />} />

        <Route path="/which_character" element={<CharacterPicker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
