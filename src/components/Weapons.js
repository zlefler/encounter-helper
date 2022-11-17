import { Typography, Button, Card } from '@mui/material';
import Weapon from './Weapon';
import { useState } from 'react';

function Weapons() {
  const [weaponCount, setWeaponCount] = useState(1);

  return (
    <Card>
      <Typography variant="h4">Weapons</Typography>
      <Weapon />
      {weaponCount > 1 && <Weapon />}
      {weaponCount > 2 && <Weapon />}
      {weaponCount > 3 && <Weapon />}
      {weaponCount < 4 && (
        <Button
          onClick={() => {
            setWeaponCount(weaponCount + 1);
          }}
        >
          Add Weapon
        </Button>
      )}
    </Card>
  );
}

export default Weapons;
