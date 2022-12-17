import React, { useState, useEffect } from 'react';

const MyContext = React.createContext();

function MyProvider(props) {
  const [abilities, setAbilities] = useState({});
  const [skills, setSkills] = useState({});
  const [user, setUser] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  useEffect(() => {
    fetch('/me').then((res) => {
      if (res.ok) {
        res.json().then((currentUser) => {
          setUser(currentUser);
        });
      }
    });
  }, []);

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
      } else {
        setLoginFailed(true);
      }
    });
  }

  return (
    <MyContext.Provider
      value={{
        abilities: abilities,
        setAbilities: setAbilities,
        skills: skills,
        setSkills: setSkills,
        user: user,
        setUser,
        onLogin: onLogin,
        onLogout: onLogout,
        loginFailed: loginFailed,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
