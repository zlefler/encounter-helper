import { Typography, Button } from '@mui/material';
import Weapon from './Weapon';
import { useState } from 'react';

function Weapons() {
  const [weaponCount, setWeaponCount] = useState(1);

  return (
    <div>
      <Typography variant="h4">Weapons</Typography>
      <Weapon />
      {weaponCount > 1 && <Weapon />}
      {weaponCount > 2 && <Weapon />}
      {weaponCount > 3 && <Weapon />}
      {weaponCount < 4 && (
        <Button onClick={(weaponCount) => setWeaponCount(weaponCount++)}>
          Add Weapon
        </Button>
      )}
    </div>
  );
}

export default Weapons;
