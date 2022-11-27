import { TextField, Autocomplete, Card } from '@mui/material';

function Weapon() {
  const critRangeOptions = ['20', '19-20', '18-20', 'None'];
  const critDamageOptions = ['x2', 'x3', 'None'];
  return (
    <Card variant="contained">
      <TextField sx={{ width: '250px', margin: '2px' }} label="Name" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Attack Bonus" />
      <Autocomplete options={critRangeOptions} label="Crit Range" />
      <Autocomplete options={critDamageOptions} label="Multiplier" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Crit Range" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Type" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Range" />
    </Card>
  );
}

export default Weapon;
