import { Typography, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

function SkillBlock({ skill }) {
  const [abilityMod, setAbilityMod] = useState('');
  const [ranks, setRanks] = useState('');
  const [miscMod, setMiscMod] = useState('');
  const [bonus, setBonus] = useState('');

  useEffect(() => {
    let temp = 0;
    if (abilityMod) {
      temp += parseInt(abilityMod);
    }
    if (miscMod) {
      temp += parseInt(miscMod);
    }
    if (ranks) {
      temp += parseInt(ranks);
    }
    setBonus(temp);
  }, [abilityMod, miscMod, ranks]);

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
        value={abilityMod}
        onChange={(e) => setAbilityMod(e.target.value)}
        className="skillblock"
        sx={{ width: '120px', height: '40px', margin: '5px' }}
        label="Ability Mod"
      />
      <Typography sx={{ margin: '5px' }}>{skill}</Typography>
      {abilityMod && <Typography>Total Bonus: {bonus}</Typography>}
    </div>
  );
}

export default SkillBlock;
