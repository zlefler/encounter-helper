import { TextField, Card } from '@mui/material';

function Weapon() {
  return (
    <Card variant="contained">
      <TextField sx={{ width: '250px' }} label="Name" />
      <TextField sx={{ width: '100px' }} label="Attack Bonus" />
      <TextField sx={{ width: '100px' }} label="Crit Range" />
      <TextField sx={{ width: '100px' }} label="Type" />
      <TextField sx={{ width: '100px' }} label="Range" />
      <TextField sx={{ width: '150px' }} label="Damage" />
    </Card>
  );
}

export default Weapon;
