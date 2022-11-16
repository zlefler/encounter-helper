import { TextField } from '@mui/material';

function Weapon() {
  return (
    <div style={{ alignItems: 'left', margin: '5px 0' }}>
      <TextField sx={{ width: '250px' }} label="Name" />
      <TextField sx={{ width: '100px' }} label="Attack Bonus" />
      <TextField sx={{ width: '100px' }} label="Crit Range" />
      <TextField sx={{ width: '100px' }} label="Type" />
      <TextField sx={{ width: '100px' }} label="Range" />
      <TextField sx={{ width: '150px' }} label="Damage" />
    </div>
  );
}

export default Weapon;
