import SkillBlock from './SkillBlock';
import { Typography } from '@mui/material';

function Skills() {
  const skills = [
    'acrobatics',
    'appraise',
    'bluff',
    'climb',
    'craft ___',
    'diplomacy',
    'disable device*',
    'disguise',
    'escape artist',
    'fly',
    'handle animal*',
    'heal',
    'intimidate',
    'knowledge (arcana)*',
    'knowledge (dungeoneering)*',
    'knowledge (engineering)*',
    'knowledge (geography)*',
    'knowledge (history)*',
    'knowledge (local)*',
    'knowledge (nature)*',
    'knowledge (nobility)*',
    'knowledge (planes)*',
    'knowledge (religion)*',
    'linguistics*',
    'perception',
    'perform ___',
    'profession ___*',
    'ride',
    'sense motive',
    'sleight of hand*',
    'spellcraft',
    'stealth',
    'survival',
    'swim',
    'use magic device*',
  ];

  return (
    <div>
      <Typography variant="h4">Skills</Typography>
      {skills.map((skillName) => (
        <SkillBlock skill={skillName} />
      ))}
      <SkillBlock skill={'acrobatics'} />
    </div>
  );
}

export default Skills;
