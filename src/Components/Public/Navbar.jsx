import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{textAlign: 'center', bgcolor:'primary.main', lineHeight:4}} onClick={handleDrawerToggle} >
      <List>
          <ListItem>
            <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection:'column' }}>
            <NavLink 
              to='/'
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  textDecoration: "none",
                  color: isPending ? "black" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}>
                <ListItemText className='menu' sx={{color :"secondary.main", fontSize:{md:"0.5rem", lg:"1.2rem"}, ml:5}}/>Accueil
              </NavLink>
              <NavLink 
                to='/about'
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{color :"secondary.main", fontSize:{md:"0.5rem", lg:"1.2rem"}, ml:5}}/>Qui suis-je ?
              </NavLink>
              <NavLink 
                to='/naturopathie'
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{color :"secondary.main", fontSize:"1.2rem", ml:5}}/>La naturopathie
              </NavLink>
              <NavLink 
                to='/services'
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{color :"secondary.main", fontSize:"1.2rem", ml:5}}/>Mes accompagnements
              </NavLink>
              <NavLink 
                to='/contact'
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{color :"secondary.main", fontSize:"1.2rem", ml:5}}/>Contact
              </NavLink>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
      <CssBaseline />
      <AppBar elevation={0} sx={{position:"sticky"}} component="nav">
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
            <NavLink to='/'>
              <Button variant="text" sx={{ color :"secondary.main", fontSize:"1.2rem", ml:5, '&:hover': {
                  color: 'secondary.light'}, letterSpacing:3}}>
                  Accueil
              </Button>
            </NavLink><NavLink to='/about'>
              <Button variant="text" sx={{ color :"secondary.main", fontSize:"1.2rem", ml:5, '&:hover': {
                  color: 'secondary.light'}, letterSpacing:3}}>
                  Qui suis-je 
              </Button>
            </NavLink>
            <NavLink to='/naturopathie' className={({ isActive }) => isActive ? "text-primary" : "text-white hover"}>
              <Button className="menu" variant="text" sx={{ color :"secondary.main", fontSize:"1.2rem", ml:5, '&:hover': {
                  color: 'secondary.light'}, letterSpacing:3}}>
                  La naturopathie
              </Button>
            </NavLink>
            <NavLink to='/services' className={({ isActive }) => isActive ? "text-primary" : "text-white hover"}> 
              <Button className="menu" variant="text" sx={{ color :"secondary.main", fontSize:"1.2rem", ml:5, '&:hover': {
                  color: 'secondary.light'}, letterSpacing:3}}>
                  Mes accompagnements
              </Button>
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-primary" : "text-white hover"}>
              <Button className="menu" variant="text" sx={{ color :"secondary.main", fontSize:"1.2rem", ml:5, '&:hover': {
                  color: 'secondary.light'}, letterSpacing:3}}>
                  Contact
              </Button>
            </NavLink>
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