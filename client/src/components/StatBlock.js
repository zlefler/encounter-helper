import { MyConsumer } from './MyContext';
import { Typography, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

function StatBlock({ name }) {
  const [score, setScore] = useState('');
  const [mod, setMod] = useState('');
  const [bonus, setBonus] = useState('');

  useEffect(() => {
    setBonus(
      mod
        ? Math.floor((parseInt(score) + parseInt(mod) - 10) / 2)
        : Math.floor((parseInt(score) - 10) / 2)
    );
  }, [score, mod]);

  return (
    <MyConsumer>
      {(context) => (
        <div style={{ display: 'flex', flexDirection: 'row', margin: '5px' }}>
          <Typography>{name}:</Typography>
          <TextField
            className="statScore"
            onChange={(e) => setScore(e.target.value)}
            label="Score"
            sx={{ width: '100px', margin: '0 5px' }}
            defaultValue={score}
          />
          <TextField
            className="statMod"
            onChange={(e) => setMod(e.target.value)}
            label="Mod"
            sx={{ width: '100px' }}
            defaultValue={mod}
          />
          {score && (
            <div>
              <Typography>
                Score: {mod ? parseInt(score) + parseInt(mod) : score}
              </Typography>
              <Typography>Mod: {bonus}</Typography>
            </div>
          )}
        </div>
      )}
    </MyConsumer>
  );
}

export default StatBlock;
