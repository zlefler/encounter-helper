import { TextField, Box, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [signedUp, setSignedup] = useState(false);
  const [errors, setErrors] = useState('');

  let navigate = useNavigate();
  function routeChange(path) {
    navigate(path);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSignedup(false);
    setErrors('');
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data['errors']) {
          setErrors(data['errors']);
        } else {
          setSignedup(true);
        }
      });
  }

  return (
    <div className="app">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
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
        <TextField
          label="confirm password"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button className="button" variant="contained" type="submit">
          Sign me up!
        </Button>
        <Button onClick={() => routeChange('/')}>go back</Button>
      </Box>
      {signedUp && (
        <div>
          <p>You did it! Now you can login.</p>
        </div>
      )}
      {errors[0] === 'Username has already been taken' && (
        <div>
          <p>Sorry, that name is taken. Please pick a different one.</p>
        </div>
      )}

      {errors[0] === "Password confirmation doesn't match Password" && (
        <div>
          <p>
            Sorry, it seems you mistyped when you confirmed your password.
            Please try again.
          </p>
        </div>
      )}
    </div>
  );
}

export default Signup;
