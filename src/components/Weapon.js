import { Typography, TextField } from '@mui/material';

function Weapon() {
  return (
    <div>
      <TextField label="Name" />
      <TextField label="Attack Bonus" />
      <TextField label="Crit Range" />
      <TextField label="Type" />
      <TextField label="Range" />
      <TextField label="Damage" />
    </div>
  );
}

export default Weapon;
