import { TextField, Card } from '@mui/material';

function Weapon() {
  return (
    <Card variant="contained">
      <TextField sx={{ width: '250px', margin: '2px' }} label="Name" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Attack Bonus" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Crit Range" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Type" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Range" />
      <TextField sx={{ width: '150px', margin: '2px' }} label="Damage" />
    </Card>
  );
}

export default Weapon;
