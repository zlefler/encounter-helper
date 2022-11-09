import { Typography, Input } from '@mui/material';

// con/str/dex/wis/cha/int
// and those would propagate bonuses out to the other stuff
// other fields would be attack, damage (maybe multiples for different weapons?),
//  all three saves, all the skills

function StatBlock({ name }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography>{name}:</Typography>
      <Input variant="outlined">{name}</Input>
    </div>
  );
}

export default StatBlock;
