import { useState } from 'react';
import { Card, Typography, Button, TextField } from '@mui/material';
import Abilities from './Abilities';
import Skills from './Skills';
import Weapons from './Weapons';
import { MyConsumer } from './MyContext';

function Home() {
  const [abilities, setAbilities] = useState(false);
  const [skills, setSkills] = useState(false);
  const [weapons, setWeapons] = useState(false);
  const [name, setName] = useState('');

  return (
    <MyConsumer>
      {(context) => (
        <div>
          <Card variant="contained" sx={{ margin: '2%' }}>
            <Typography variant="h2">Encounter Helper</Typography>
          </Card>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="skillblock"
            sx={{ width: '300px', height: '10px' }}
            label="Name"
          />
          <Button variant="contained" onClick={() => context.onSaveName(name)}>
            save
          </Button>
          <Button onClick={() => setAbilities((abilities) => !abilities)}>
            Abilities
          </Button>
          {abilities && <Abilities />}
          <Button onClick={() => setSkills((skills) => !skills)}>Skills</Button>
          {skills && <Skills />}
          <Button onClick={() => setWeapons((weapons) => !weapons)}>
            Weapons
          </Button>
          {weapons && <Weapons />}
        </div>
      )}
    </MyConsumer>
  );
}
export default Home;
