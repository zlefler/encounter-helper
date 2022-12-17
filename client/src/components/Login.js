import { TextField, Box, Button } from '@mui/material';
import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);

  function onLogin(e, username, password) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        setLoginFailed(false);
        res.json().then((userInfo) => setUser(userInfo));
      } else {
        setLoginFailed(true);
      }
    });
  }

  function onLogout() {
    fetch('/logout', {
      method: 'DELETE',
    });
    setUser('');
  }

  return (
    <Box
      className="app"
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={(e) => {
        // routeChange();
        onLogin(e, username, password);
      }}
    >
      {!user ? (
        <>
          <TextField
            label="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log In</Button>
        </>
      ) : (
        <Button
          onClick={() => {
            // routeChange();
            onLogout();
          }}
        >
          Log Out
        </Button>
      )}
      {loginFailed && (
        <p>Sorry, that didn't work. Are you sure you have an account?</p>
      )}
    </Box>
  );
}

export default Login;
