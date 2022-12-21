import { Box, Card, Typography, Button, TextField } from '@mui/material';
import { MyConsumer } from './MyContext';
import { useState } from 'react';

function Abilities() {
  const [strength, setStrength] = useState('');
  const [dexterity, setDexterity] = useState('');
  const [constitution, setConstitution] = useState('');
  const [intelligence, setIntelligence] = useState('');
  const [wisdom, setWisdom] = useState('');
  const [charisma, setCharisma] = useState('');

  return (
    <MyConsumer>
      {(context) => (
        <>
          {Object.keys(context.abilities).length !== 0 && (
            <Card>
              <Typography variant="h3">Current ability scores:</Typography>
              {Object.values(context.abilites).map((ability) => (
                <Typography variant="h4">{ability}</Typography>
              ))}
            </Card>
          )}
          <Box component="form">
            <Typography sx={{ alignItems: 'left' }} variant="h4">
              Abilities
            </Typography>
            <Typography>STR: </Typography>
            <TextField
              className="statScore"
              onChange={(e) => setStrength(e.target.value)}
              sx={{ width: '70px', margin: '0 5px' }}
              defaultValue={strength}
            />
            <Typography>DEX: </Typography>
            <TextField
              className="statScore"
              onChange={(e) => setDexterity(e.target.value)}
              sx={{ width: '70px', margin: '0 5px' }}
              defaultValue={dexterity}
            />
            <Typography>CON: </Typography>
            <TextField
              className="statScore"
              onChange={(e) => setConstitution(e.target.value)}
              sx={{ width: '70px', margin: '0 5px' }}
              defaultValue={constitution}
            />
            <Typography>INT: </Typography>
            <TextField
              className="statScore"
              onChange={(e) => setIntelligence(e.target.value)}
              sx={{ width: '70px', margin: '0 5px' }}
              defaultValue={intelligence}
            />
            <Typography>WIS: </Typography>
            <TextField
              className="statScore"
              onChange={(e) => setWisdom(e.target.value)}
              sx={{ width: '70px', margin: '0 5px' }}
              defaultValue={wisdom}
            />
            <Typography>CHA: </Typography>
            <TextField
              className="statScore"
              onChange={(e) => setCharisma(e.target.value)}
              sx={{ width: '70px', margin: '0 5px' }}
              defaultValue={charisma}
            />
            <Button
              variant="contained"
              onClick={() =>
                context.onSaveAbilities({
                  strength,
                  dexterity,
                  constitution,
                  intelligence,
                  wisdom,
                  charisma,
                })
              }
            >
              Save
            </Button>
          </Box>
        </>
      )}
    </MyConsumer>
  );
}

export default Abilities;
