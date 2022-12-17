import { TextField, Box, Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import { MyConsumer } from './MyContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  function routeChange(path) {
    navigate(path);
  }

  return (
    <MyConsumer>
      {(context) => (
        <div>
          <Card variant="contained" sx={{ margin: '2%' }}>
            <Typography variant="h3">
              Welcome to the Encounter Helper!
            </Typography>
            <Typography variant="h4">Log in here.</Typography>
          </Card>

          <Box
            className="app"
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              context.onLogin(e, username, password);
              routeChange('/diceroller');
            }}
          >
            {!context.user ? (
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
                  context.onLogout();
                }}
              >
                Log Out
              </Button>
            )}
            {context.loginFailed && (
              <p>Sorry, that didn't work. Are you sure you have an account?</p>
            )}
          </Box>
          <Card variant="contained" sx={{ margin: '2%' }}>
            <Typography variant="h4">Don't have an account?</Typography>
            <Button variant="contained" onClick={() => routeChange('/signup')}>
              Sign up here
            </Button>
          </Card>
        </div>
      )}
    </MyConsumer>
  );
}
export default Login;
