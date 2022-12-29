import { Box, Typography, Button, TextField } from '@mui/material';
import { MyConsumer, MyContext } from './MyContext';
import { useState, useContext } from 'react';

function Abilities() {
  const { abilities } = useContext(MyContext);
  const [strength, setStrength] = useState(abilities.strength);
  const [dexterity, setDexterity] = useState(abilities.dexterity);
  const [constitution, setConstitution] = useState(abilities.constitution);
  const [intelligence, setIntelligence] = useState(abilities.intelligence);
  const [wisdom, setWisdom] = useState(abilities.wisdom);
  const [charisma, setCharisma] = useState(abilities.charisma);

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
          <Box component="form">
            <Typography sx={{ alignItems: 'left' }} variant="h4">
              Abilities
            </Typography>
            <div className="ability">
              <Typography>STR: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setStrength(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={strength}
              />
            </div>
            <div className="ability">
              <Typography>DEX: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setDexterity(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={dexterity}
              />
            </div>
            <div className="ability">
              <Typography>CON: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setConstitution(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={constitution}
              />
            </div>
            <div className="ability">
              <Typography>INT: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setIntelligence(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={intelligence}
              />
            </div>
            <div className="ability">
              <Typography>WIS: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setWisdom(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={wisdom}
              />
            </div>
            <div className="ability">
              <Typography>CHA: </Typography>
              <TextField
                className="statScore"
                onChange={(e) => setCharisma(e.target.value)}
                sx={{ width: '70px', margin: '0 5px' }}
                defaultValue={charisma}
              />
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
