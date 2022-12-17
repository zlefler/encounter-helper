import { MyConsumer } from './MyContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, TextField, Typography } from '@mui/material';

function DiceRoller() {
  const [d4, setd4] = useState('');
  const [d6, setd6] = useState('');
  const [d8, setd8] = useState('');
  const [d10, setd10] = useState('');
  const [d20, setd20] = useState('');
  const [dpct, setdpct] = useState('');
  const [rollTotal, setRollTotal] = useState('0');

  let navigate = useNavigate();
  function routeChange(path) {
    navigate(path);
  }

  function rollDice() {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max) + 1;
    }

    let total = 0;
    for (let i = 0; i < d4; i++) {
      total += getRandomInt(4);
    }
    for (let i = 0; i < d6; i++) {
      total += getRandomInt(6);
    }
    for (let i = 0; i < d8; i++) {
      total += getRandomInt(8);
    }
    for (let i = 0; i < d10; i++) {
      total += getRandomInt(10);
    }
    for (let i = 0; i < d20; i++) {
      total += getRandomInt(20);
    }
    for (let i = 0; i < dpct; i++) {
      total += getRandomInt(100);
    }

    setRollTotal(total);
  }

  function clearRolls() {
    setd4('');
    setd6('');
    setd8('');
    setd10('');
    setd20('');
    setdpct('');
  }

  return (
    <MyConsumer>
      {(context) => (
        <>
          <Button
            variant="contained"
            onClick={() => {
              context.onLogout();
              routeChange('/');
            }}
          >
            sign out
          </Button>
          <Card>
            <TextField
              sx={{ width: '80px', margin: '6px' }}
              label="D4"
              onChange={(e) => setd4(e.target.value)}
              value={d4}
            />
            <TextField
              sx={{ width: '80px', margin: '6px' }}
              label="D6"
              onChange={(e) => setd6(e.target.value)}
              value={d6}
            />
            <TextField
              sx={{ width: '80px', margin: '6px' }}
              label="D8"
              onChange={(e) => setd8(e.target.value)}
              value={d8}
            />
            <TextField
              sx={{ width: '80px', margin: '6px' }}
              label="D10"
              onChange={(e) => setd10(e.target.value)}
              value={d10}
            />
            <TextField
              sx={{ width: '80px', margin: '6px' }}
              label="D20"
              onChange={(e) => setd20(e.target.value)}
              value={d20}
            />
            <TextField
              sx={{ width: '80px', margin: '6px' }}
              label="D%"
              onChange={(e) => setdpct(e.target.value)}
              value={dpct}
            />
            <Button onClick={() => rollDice()}>Roll</Button>
            <Button onClick={() => clearRolls()}>Clear</Button>
            {rollTotal && <Typography>Total: {rollTotal}</Typography>}
          </Card>
          <Button onClick={() => routeChange('/edit_character')}>
            edit character
          </Button>
        </>
      )}
    </MyConsumer>
  );
}

export default DiceRoller;
