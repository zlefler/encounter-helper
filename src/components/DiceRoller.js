import { useState } from 'react';

import {
  Card,
  Typography,
  Autocomplete,
  Button,
  TextField,
} from '@mui/material';

function DiceRoller() {
  const [d4, setd4] = useState('0');
  const [d6, setd6] = useState('0');
  const [d8, setd8] = useState('0');
  const [d10, setd10] = useState('0');
  const [d20, setd20] = useState('0');
  // const [dPct, setDPct] = useState('0');

  const dieRolls = ['0', '1', '2', '3', '4', '5'];

  function clearRolls() {
    setd4('0');
    setd6('0');
    setd8('0');
    setd10('0');
    setd20('0');
  }

  return (
    <Card>
      <Autocomplete
        onChange={(e) => setd4(e.target.value)}
        options={dieRolls}
        sx={{ width: '80px', margin: '6px' }}
        label="D4"
        value={d4}
      />
      <Autocomplete
        onChange={(e) => setd6(e.target.value)}
        options={dieRolls}
        sx={{ width: '80px', margin: '6px' }}
        renderInput={(params) => <TextField {...params} label="D6" />}
      />
      <Autocomplete
        onChange={(e) => setd8(e.target.value)}
        options={dieRolls}
        sx={{ width: '80px', margin: '6px' }}
        renderInput={(params) => <TextField {...params} label="D8" />}
      />
      <Autocomplete
        onChange={(e) => setd10(e.target.value)}
        options={dieRolls}
        sx={{ width: '80px', margin: '6px' }}
        renderInput={(params) => <TextField {...params} label="D10" />}
      />
      <Autocomplete
        onChange={(e) => setd20(e.target.value)}
        options={dieRolls}
        sx={{ width: '80px', margin: '6px' }}
        renderInput={(params) => <TextField {...params} label="D20" />}
      />
      {/* <Autocomplete label="D%" /> */}
      <Button>Roll</Button>
      <Button onClick={() => clearRolls()}>Clear</Button>
    </Card>
  );
}

export default DiceRoller;
