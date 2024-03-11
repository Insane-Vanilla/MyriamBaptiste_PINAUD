import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import '../App.css';


const drawerWidth = 240;
const navItems = ['Qui suis-je ?', 'La naturopathie', 'Mes accompagnements', 'Contact'];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{textAlign: 'center', bgcolor:'primary.main'}} onClick={handleDrawerToggle} >
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText variant="h2" primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      <Button size="large" variant="contained">Connexion</Button>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
      <CssBaseline />
      <AppBar elevation={0} position="sticky" component="nav">
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon color="secondary" />
          </IconButton>

          <Box margin='auto' sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button hover className="menu" variant="text" key={item} sx={{ color :"secondary.dark", fontSize:"1.2rem", ml:5}}>
                {item}
              </Button>
            ))}
            <Button sx={{ml:10}}size="large" variant="contained">Connexion</Button>
          </Box>
          
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            boxShadows: 'none', display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;