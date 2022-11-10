import { Typography, TextField } from '@mui/material';
import useState from 'react';

// con/str/dex/wis/cha/int
// and those would propagate bonuses out to the other stuff
// other fields would be attack, damage (maybe multiples for different weapons?),
//  all three saves, all the skills

function StatBlock({ name }) {
  //   const [score, setScore] = useState('');
  //   const [mod, setMod] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography>{name}:</Typography>
      <TextField
        // onChange={(e) => setScore(e.target.value)}
        label="Score"
        sx={{ width: '100px', margin: '5px' }}
        // defaultValue={score}
      />
      <TextField
        // onChange={(e) => setMod(e.target.value)}
        label="Mod"
        sx={{ width: '100px' }}
        // defaultValue={mod}
      />
    </div>
  );
}

export default StatBlock;
