import { useState } from 'react';

import { Card, Typography, Autocomplete, Button } from '@mui/material';

function DiceRoller() {
  const [d4, setd4] = useState('0');
  const [d6, setd6] = useState('0');
  const [d8, setd8] = useState('0');
  const [d10, setd10] = useState('0');
  const [d20, setd20] = useState('0');
  const [dPct, setDPct] = useState('0');

  const dieRolls = ['1', '2', '3', '4', '5'];
  return (
    <Card>
      <Autocomplete
        onClick={(e) => setd4(e.target.value)}
        options={dieRolls}
        label="D4"
      />
      <Autocomplete
        onClick={(e) => setd6(e.target.value)}
        options={dieRolls}
        label="D6"
      />
      <Autocomplete
        onClick={(e) => setd8(e.target.value)}
        options={dieRolls}
        label="D8"
      />
      <Autocomplete
        onClick={(e) => setd10(e.target.value)}
        options={dieRolls}
        label="D10"
      />
      <Autocomplete
        onClick={(e) => setd20(e.target.value)}
        options={dieRolls}
        label="D20"
      />
      <Autocomplete label="D%" />
      <Button>Roll</Button>
    </Card>
  );
}

export default DiceRoller;
