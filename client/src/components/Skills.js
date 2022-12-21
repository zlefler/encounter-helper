import SkillBlock from './SkillBlock';
import { Typography } from '@mui/material';

function Skills() {
  const skills = [
    'Acrobatics',
    'Appraise',
    'Bluff',
    'Climb',
    'Craft ___',
    'Diplomacy',
    'Disable Device*',
    'Disguise',
    'Escape Artist',
    'Fly',
    'Handle Animal*',
    'Heal',
    'Intimidate',
    'Knowledge (arcana)*',
    'Knowledge (dungeoneering)*',
    'Knowledge (engineering)*',
    'Knowledge (geography)*',
    'Knowledge (history)*',
    'Knowledge (local)*',
    'Knowledge (nature)*',
    'Knowledge (nobility)*',
    'Knowledge (planes)*',
    'Knowledge (religion)*',
    'Linguistics*',
    'Perception',
    'Perform ___',
    'Profession ___*',
    'Ride',
    'Sense Motive',
    'Sleight of Hand*',
    'Spellcraft',
    'Stealth',
    'Survival',
    'Swim',
    'Use Magic Device*',
  ];

  return (
    <div>
      <Typography variant="h4">Skills</Typography>
      {skills.map((skillName) => (
        <SkillBlock skill={skillName} />
      ))}
    </div>
  );
}

export default Skills;
