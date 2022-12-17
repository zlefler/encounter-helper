import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterBuilder from './components/CharacterBuilder';
import Login from './components/Login';
import Signup from './components/Signup';
import DiceRoller from './components/DiceRoller';
import CharacterPicker from './components/CharacterPicker';
import Navbar from './components/Navbar';

// TODO: figure out how you want login info / signup stuff to persist on the page
// Even if you don't want them to persist, you'll want a signout button to persist.

// TODO: Make data persist when building character on front end

// TODO: build functions to save/get stats from character on back end

// TODO: build "add new character" button

// TODO: Figure out where current character ID should live. Does it live in state
// and gets passed on every fetch? Probably. If so, make sure back end
// knows where to find it.

// TODO: add name to character editor

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/edit_character" element={<CharacterBuilder />} />

        <Route path="/diceroller" element={<DiceRoller />} />

        <Route path="/which_character" element={<CharacterPicker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
