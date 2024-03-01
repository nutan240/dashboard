import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { Button } from '@mui/material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
const navigate = useNavigate()
const home =()=>{
  navigate('/')
}

  return (
    <Box sx={{ display: 'flex' , }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background :'rgb(96 34 99)'}} open={open}>
        <Toolbar sx={{background:'rgb(96 34 99 / 52%)'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>setOpen(!open)}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{fontFamily:'sans-serif'}} variant="h6" noWrap component="div">
            USER INTERFACE DASHBOARD 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer sx={{background:'rgb(96 34 99 / 52%)'}} variant="permanent" open={open}>
        <DrawerHeader sx={{background:'rgb(96 34 99 / 52%)'}}>
          <IconButton onClick={()=>setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List  sx={{background:'rgb(96 34 99 / 52%)' ,height :'100%' ,color :'rgb(96 34 99)' , fontWeight :'bold'}}>
       
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  pl: 3.7,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 4,
                    justifyContent: 'center',
                  }}
                >
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{width:'100px' ,}} onClick={home} primary='HOME' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  pl: 3.7,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  4 ,
                    justifyContent: 'center',
                  }}
                >
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText onClick={()=>navigate('/about')}  primary='ABOUT' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  pl: 3.7,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr:  4,
                    justifyContent: 'center',
                  }}
                >
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText onClick={()=>navigate('/setting')}  primary='SETTINGS' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  pl: 3.7,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 4,
                    justifyContent: 'center',
                  }}
                >
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{width:'100px' ,}} onClick={()=>navigate('/analytics')}primary='ANALYTICS' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  pl: 3.7,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 4,
                    justifyContent: 'center',
                  }}
                >
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{width:'100px' ,}} onClick={()=>navigate('/trading')}primary='TRADING CHART' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  pl: 3.7,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 4,
                    justifyContent: 'center',
                  }}
                >
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{width:'100px' ,}} onClick={()=>navigate('/product')}primary='PRODUCTS' />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  pl: 3.7,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 4,
                    justifyContent: 'center',
                  }}
                >
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{width:'100px' ,}} onClick={()=>navigate('/demo')}primary='DATE PICKER' />
              </ListItemButton>
            </ListItem>

        </List>
        <Divider />
       
      </Drawer>
    
    </Box>
  );
}