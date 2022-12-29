import { Box, Typography, Button, TextField } from '@mui/material';
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
          {/* {Object.keys(context.abilities).length !== 0 && (
            <Card variant="contained">
              <Typography variant="h3">Current ability scores:</Typography>
              {Object.values(context.abilities).forEach(function (key, index) {
                <Typography variant="h4">
                  {context.abilities[key]}
                  {key}
                </Typography>;
              })}
            </Card>
          )} */}
          <Typography>Current stats:</Typography>
          <Box component="form">
            <Typography sx={{ alignItems: 'left' }} variant="h4">
              Abilities (old stats on right)
            </Typography>
            <div className="ability">
              <Typography>STR: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setStrength(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={strength}
              />
              <Typography>{context.abilities.strength}</Typography>
            </div>
            <div className="ability">
              <Typography>DEX: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setDexterity(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={dexterity}
              />
              <Typography>{context.abilities.dexterity}</Typography>
            </div>
            <div className="ability">
              <Typography>CON: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setConstitution(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={constitution}
              />
              <Typography>{context.abilities.constitution}</Typography>
            </div>
            <div className="ability">
              <Typography>INT: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setIntelligence(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={intelligence}
              />
              <Typography>{context.abilities.intelligence}</Typography>
            </div>
            <div className="ability">
              <Typography>WIS: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setWisdom(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={wisdom}
              />
              <Typography>{context.abilities.wisdom}</Typography>
            </div>
            <div className="ability">
              <Typography>CHA: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setCharisma(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={charisma}
              />
              <Typography>{context.abilities.charisma}</Typography>
            </div>
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
