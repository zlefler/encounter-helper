import { useState } from 'react';
import { Card, Typography, Button } from '@mui/material';
import Abilities from './Abilities';
import Skills from './Skills';
import Weapons from './Weapons';

function Home() {
  const [abilities, setAbilities] = useState(false);
  const [skills, setSkills] = useState(false);
  const [weapons, setWeapons] = useState(false);
  return (
    <div>
      <Card variant="contained" sx={{ margin: '2%' }}>
        <Typography variant="h2">Encounter Helper</Typography>
      </Card>
      <Button onClick={() => setAbilities((abilities) => !abilities)}>
        Abilities
      </Button>
      {abilities && <Abilities />}
      <Button onClick={() => setSkills((skills) => !skills)}>Skills</Button>
      {skills && <Skills />}
      <Button onClick={() => setWeapons((weapons) => !weapons)}>Weapons</Button>
      {weapons && <Weapons />}
    </div>
  );
}

export default Home;
