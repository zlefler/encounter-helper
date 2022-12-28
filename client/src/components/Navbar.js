import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyConsumer } from './MyContext';

function Navbar() {
  let navigate = useNavigate();
  function routeChange(path) {
    navigate(path);
  }

  return (
    <MyConsumer>
      {(context) => (
        <>
          {context.user && (
            <>
              <Button
                variant="contained"
                onClick={() => {
                  context.onLogout();
                  routeChange('/');
                }}
              >
                sign out
              </Button>
              <Button onClick={() => routeChange('/edit_character')}>
                edit character
              </Button>
            </>
          )}
          <Button onClick={() => routeChange('/which_character')}>
            Back To characters
          </Button>
        </>
      )}
    </MyConsumer>
  );
}

export default Navbar;
