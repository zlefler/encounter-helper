import { useState } from 'react';
import { Card, Typography, Button } from '@mui/material';
import Abilities from './Abilities';
import Skills from './Skills';
import Weapons from './Weapons';
import { MyConsumer } from './MyContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [abilities, setAbilities] = useState(false);
  const [skills, setSkills] = useState(false);
  const [weapons, setWeapons] = useState(false);

  const navigate = useNavigate();
  function routeChange(path) {
    navigate(path);
  }

  return (
    <MyConsumer>
      {(context) => (
        <div>
          <Card variant="contained" sx={{ margin: '2%' }}>
            <Typography variant="h2">Encounter Helper</Typography>
            {context.currentCharacter ? (
              <>
                <Typography variant="h4">You are currently editing:</Typography>
                <Typography variant="h3">
                  {context.currentCharacter.name}
                </Typography>
                <Button
                  onClick={() => {
                    context.setNewCharacter(false);
                    routeChange('/character_name');
                  }}
                >
                  change character name/level
                </Button>
              </>
            ) : (
              <Typography variant="h4">
                You do not have a character selected.
              </Typography>
            )}
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
