import React, { useState, useEffect } from 'react';

const MyContext = React.createContext();

function MyProvider(props) {
  const [abilities, setAbilities] = useState({});
  const [skills, setSkills] = useState({});
  const [user, setUser] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [currentCharacterId, setCurrentCharacterID] = useState('');

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => {
          setUser(currentUser);
          fetchCharacters();
        });
      }
    });
  }, []);

  function fetchCharacters() {
    fetch(`/characters/${user.id}`).then((res) => {
      res.json().then((characterInfo) => setCharacters(characterInfo));
    });
  }

  function onLogout() {
    fetch('/logout', {
      method: 'DELETE',
    });
    setUser('');
  }

  function onLogin(e, username, password) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        setLoginFailed(false);
        res.json().then((userInfo) => userInfo);
        fetchCharacters();
      } else {
        setLoginFailed(true);
      }
    });
  }

  function onSaveName(newName) {
    fetch(`/characters/${newName}`, {
      method: 'POST',
      headers: { ContentType: 'application/json' },
      body: JSON.stringify(newName),
    }).then((res) => res.json().then((id) => setCurrentCharacterID(id)));
  }

  function OnSaveAbilities(newAbilities) {
    fetch(`/abilities`, {
      method: 'POST',
      headers: { ContentType: 'application/json' },
      body: JSON.stringify({
        newAbilities,
        characterID: currentCharacterId,
      }).then((res) =>
        res.json().then((abilityInfo) => setAbilities(abilityInfo))
      ),
    });
  }

  return (
    <MyContext.Provider
      value={{
        abilities,
        onSaveName,
        OnSaveAbilities,
        skills,
        setSkills,
        characters,
        user,
        setUser,
        onLogin,
        onLogout,
        loginFailed,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
