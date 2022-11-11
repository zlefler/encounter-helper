import { Typography, TextField } from '@mui/material';

function SkillBlock({ skill }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography>{skill}</Typography>
      <TextField sx={{ width: '120px' }} label="Ability Mod" />
      <TextField sx={{ width: '90px' }} label="Ranks" />
      <TextField sx={{ width: '100px' }} label="Misc Mod" />
    </div>
  );
}

export default SkillBlock;
