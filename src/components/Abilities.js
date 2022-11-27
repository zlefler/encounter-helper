import StatBlock from './StatBlock';
import { Card, Typography } from '@mui/material';

function Abilities() {
  return (
    <Card variant="contained">
      <Typography sx={{ alignItems: 'left' }} variant="h4">
        Abilities
      </Typography>
      <StatBlock name="STR" />
      {/* <StatBlock name="DEX" />
      <StatBlock name="CON" />
      <StatBlock name="INT" />
      <StatBlock name="WIS" />
      <StatBlock name="CHA" /> */}
    </Card>
  );
}

export default Abilities;
