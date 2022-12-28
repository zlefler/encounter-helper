import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { MyConsumer } from './MyContext';
import { useNavigate } from 'react-router-dom';

function Name() {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');

  const navigate = useNavigate();
  function routePicker(path) {
    navigate(path);
  }

  return (
    <MyConsumer>
      {(context) => (
        <>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="skillblock"
            sx={{ width: '300px', height: '10px' }}
            label="Name"
          />
          <TextField
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="skillblock"
            sx={{ width: '100px', height: '10px' }}
            label="Level"
          />
          <Button
            variant="contained"
            onClick={() => {
              context.onCreateCharacter(name, level);
              routePicker('/edit_character');
            }}
          >
            save
          </Button>
        </>
      )}
    </MyConsumer>
  );
}
export default Name;
