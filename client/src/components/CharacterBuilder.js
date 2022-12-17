import { useState } from 'react';
import { Card, Typography, Button } from '@mui/material';
import Abilities from './Abilities';
import Skills from './Skills';
import Weapons from './Weapons';
import { useNavigate } from 'react-router-dom';
import { MyConsumer } from './MyContext';

function Home() {
  const [abilities, setAbilities] = useState(false);
  const [skills, setSkills] = useState(false);
  const [weapons, setWeapons] = useState(false);

  let navigate = useNavigate();
  function routeChange(path) {
    navigate(path);
  }

  return (
    <MyConsumer>
      {(context) => (
        <div>
          <Button
            variant="contained"
            onClick={() => {
              context.onLogout();
              routeChange('/');
            }}
          >
            sign out
          </Button>
          <Card variant="contained" sx={{ margin: '2%' }}>
            <Typography variant="h2">Encounter Helper</Typography>
          </Card>
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
