import StatBlock from './StatBlock';
import { Card, Typography } from '@mui/material';
import { MyConsumer } from './MyContext';

function Abilities() {
  return (
    <MyConsumer>
      {(context) => (
        <Card variant="contained">
          <Typography sx={{ alignItems: 'left' }} variant="h4">
            Abilities
          </Typography>
          <p>{context.loginFailed}</p>
          <StatBlock name="STR" />
          <StatBlock name="DEX" />
          <StatBlock name="CON" />
          <StatBlock name="INT" />
          <StatBlock name="WIS" />
          <StatBlock name="CHA" />
        </Card>
      )}
    </MyConsumer>
  );
}

export default Abilities;
