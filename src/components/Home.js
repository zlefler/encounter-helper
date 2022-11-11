import { Card, Typography } from '@mui/material';
import Abilities from './Abilities';
import Skills from './Skills';

function Home() {
  return (
    <div>
      <Card variant="contained" sx={{ margin: '2%' }}>
        <Typography variant="h2">Encounter Helper</Typography>
      </Card>
      <Abilities />
      <Skills />
    </div>
  );
}

export default Home;
