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
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography>{skill}</Typography>
      <TextField
        value={abilityMod}
        onChange={(e) => setAbilityMod(e.target.value)}
        className="skillblock"
        sx={{ width: '120px', height: '10px' }}
        label="Ability Mod"
      />
      <TextField
        value={ranks}
        onChange={(e) => setRanks(e.target.value)}
        className="skillblock"
        sx={{ width: '90px' }}
        label="Ranks"
      />
      <TextField
        value={miscMod}
        onChange={(e) => setMiscMod(e.target.value)}
        className="skillblock"
        sx={{ width: '100px' }}
        label="Misc Mod"
      />
      {abilityMod && <Typography>Total Bonus: {bonus}</Typography>}
    </div>
  );
}

export default SkillBlock;
