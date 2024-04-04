import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { ListItemIcon } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import ListItemText from '@mui/material/ListItemText';

function PaymentMethods() {
  return (
    <List sx={{width:'100%', maxWidth:600, bgcolor:'secondary.main', m:'auto'}}>
      <ListItem alignItems="flex-start">
        <ListItemIcon>
          <PaymentIcon sx={{color:"secondary.light", width:60}}/>
        </ListItemIcon>
        <ListItemText
          primary="Paiement"
          sx={{color:"secondary.light"}}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Moyens de paiement acceptés
              </Typography>
              {" : Chèques ou espèces"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemIcon>
            <HealthAndSafetyIcon sx={{color:"secondary.light", width:60}}/>
            </ListItemIcon>
        <ListItemText
          primary="Remboursement"
          sx={{color:"secondary.light"}}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Complémentaires santé
              </Typography>
              {" : Aujourd'hui de nombreuses mutuelles prennent en charge des consultations de naturopathie.Merci de vous renseigner auprès de votre complémentaire santé."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}

export default PaymentMethods;