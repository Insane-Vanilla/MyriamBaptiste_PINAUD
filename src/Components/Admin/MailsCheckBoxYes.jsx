import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

function MailsCheckBox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
        sx={{
            color: "secondary.dark",
            '&.Mui-checked': {
            color: "secondary.main",
            },}}
    />
  );
}

export default MailsCheckBox;