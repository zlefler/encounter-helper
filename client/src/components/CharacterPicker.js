import { useNavigate } from 'react-router-dom';
import { Card, Typography, Button } from '@mui/material';
import { MyConsumer } from './MyContext';

function CharacterPicker() {
  const navigate = useNavigate();
  function routeChange(path) {
    navigate(path);
  }

  return (
    <MyConsumer>
      {(context) => (
        <>
          {context.characters !== [] ? (
            <>
              <Typography variant="h4">
                Pick which character you want to use
              </Typography>
              <Card>
                {context.characters.map((character) => (
                  <Button
                    onClick={() => {
                      context.setCurrentCharacter(character);
                      routeChange('/edit_character');
                    }}
                  >
                    {character.name}
                  </Button>
                ))}
              </Card>
            </>
          ) : (
            <Typography variant="h4">
              You don't have any characters yet.
            </Typography>
          )}
          <Button onClick={() => routeChange('/new_character')}>
            Create new character
          </Button>
        </>
      )}
    </MyConsumer>
  );
}

export default CharacterPicker;
