import {
  TextField,
  Autocomplete,
  Card,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';

function Weapon() {
  const critRangeOptions = ['20', '19-20', '18-20', 'None'];
  const critDamageOptions = ['x2', 'x3', 'None'];
  return (
    <Card
      style={{ display: 'flex', flexDirection: 'row', margin: '2px' }}
      variant="contained"
    >
      <TextField sx={{ width: '250px', margin: '2px' }} label="Name" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Attack Bonus" />
      <Autocomplete
        options={critRangeOptions}
        renderInput={(params) => (
          <TextField
            sx={{ width: '150px', margin: '2px' }}
            {...params}
            label="Crit Range"
          />
        )}
      />
      <Autocomplete
        options={critDamageOptions}
        renderInput={(params) => (
          <TextField
            sx={{ width: '150px', margin: '2px' }}
            {...params}
            label="Multiplier"
          />
        )}
      />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Type" />
      <TextField sx={{ width: '100px', margin: '2px' }} label="Range" />
      <FormGroup>
        <FormControlLabel
          sx={{ margin: '2px' }}
          control={<Checkbox />}
          label="Ranged"
        />
      </FormGroup>
    </Card>
  );
}

export default Weapon;
