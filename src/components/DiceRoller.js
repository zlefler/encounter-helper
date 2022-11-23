import { useState } from 'react';

import { Card, Typography, Autocomplete } from '@mui/material';

function DiceRoller() {
  const [d4, setd4] = useState('0');
  const [d6, setd6] = useState('0');
  const [d8, setd8] = useState('0');
  const [d10, set10] = useState('0');
  const [d20, setd10] = useState('0');
  const [dPct, setdPct] = useState('0');
  return (
    <Card>
      <Autocomplete label="D4" />
      <Autocomplete label="D6" />
      <Autocomplete label="D8" />
      <Autocomplete label="D10" />
      <Autocomplete label="D20" />
      <Autocomplete label="D%" />
    </Card>
  );
}

export default DiceRoller;
