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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import ReviewsIcon from '@mui/icons-material/Reviews';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Style/Images/logo.png';

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar sx={{bgcolor:"primary.main"}} elevation={0}/>
      <Divider />
      <img className="logo-admin" src={logo} alt="logo"/>
      <List sx={{bgcolor:"primary.main"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon sx={{color:"primary.light"}}/>
              </ListItemIcon>
              <NavLink 
                to='mails'
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{fontSize:{md:"0.5rem", lg:"1.2rem"}, ml:5}}/>Liste des messages
              </NavLink>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List sx={{bgcolor:"primary.main"}}>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <ReviewsIcon sx={{color:"primary.light"}}/>
              </ListItemIcon>
              <NavLink 
                to='reviews' 
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{fontSize:{md:"0.5rem", lg:"1.2rem"}, ml:5}}/>Liste des avis
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RateReviewIcon sx={{color:"primary.light"}}/>
              </ListItemIcon>
              <NavLink 
                to='reviews/add'
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{fontSize:{md:"0.5rem", lg:"1.2rem"}, ml:5}}/>Ajouter un avis
              </NavLink>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      <List sx={{bgcolor:"primary.main"}}>
        <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <FormatListBulletedIcon sx={{color:"primary.light"}}/>
              </ListItemIcon>
              <NavLink 
                to='services'
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{fontSize:{md:"0.5rem", lg:"1.2rem"}, ml:5}}/>Liste des services
              </NavLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <PlaylistAddIcon sx={{color:"primary.light"}}/>
              </ListItemIcon>
              <NavLink 
                to='services/add' 
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: "none",
                    color: isPending ? "black" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}>
                <ListItemText className='menu' sx={{fontSize:{md:"0.5rem", lg:"1.2rem"}, ml:5}}/>Ajouter un service
              </NavLink>
            </ListItemButton>
          </ListItem>
      </List>

    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor:"primary.main" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor:"primary.main"
        }}
      >
        <Toolbar sx={{bgcolor:"primary.main"}} elevation={0}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/admin' style={{textDecoration:'none',color:"primary.dark", '&:visited': {color: 'primary.dark' }}}>
            <Typography variant="h2" noWrap>Espace Administrateur</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}


export default SideBar;