import { Card, Typography, Autocomplete } from '@mui/material';

function DiceRoller() {
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
