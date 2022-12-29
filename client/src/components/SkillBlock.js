import { TextField, Typography } from '@mui/material';
import { useState } from 'react';

function SkillBlock({ skill }) {
  const [score, setScore] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '5px',
        margin: '5px',
      }}
    >
      <TextField
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="skillblock"
        sx={{ width: '120px', height: '40px', margin: '5px' }}
        label="Ability Mod"
      />
      <Typography sx={{ padding: '20px 0 0 0' }}>{skill}</Typography>
    </div>
  );
}

export default SkillBlock;
