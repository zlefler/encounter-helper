import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterBuilder from './components/CharacterBuilder';
import Login from './components/Login';
import Signup from './components/Signup';
import DiceRoller from './components/DiceRoller';

// TODO: figure out how you want login info / signup stuff to persist on the page
// Even if you don't want them to persist, you'll want a signout button to persist.

// TODO: build functions to get stats from character

// TODO: build page (or form on page?) to choose which character for user

// TODO: build "add new character" button

// TODO: add name to character editor

// TODO: if user doesn't have a character yet, take them straight to editor?
// or have landing page that says "you don't have any characters, click here to
// make one"

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
