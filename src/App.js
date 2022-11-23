import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import  Products  from './Components/Products/Products';
import {ContactUs} from './Components/ContactUs/ContactUs';
import { AddProduct } from './Components/AddProduct/AddProduct';
import CartList from './Components/Cart/CartList';


const pages = ['Home', 'Products','Cart', 'Contact Us', 'Add product'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const pagesfunc = ['home', 'products', 'cart', 'contactus', 'addproduct']
const settingsfunc = ['profile', 'account', 'dashboard']

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <div className="App">
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Rental.in
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page} onClick={event => {
                  handleCloseNavMenu();
                  navigate(`/${pagesfunc[index]}`)
                  }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Rental.in
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={event=>{handleCloseNavMenu();
                  navigate(`/${pagesfunc[index]}`)}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,index) => (
                <MenuItem key={setting} onClick={event=>{handleCloseUserMenu();
                navigate(`${settingsfunc[index]}`)}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<CartList/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </div>   
    
  );
}

function Home(){
  return(
    <div>
      <h1>Welcome to Rental.in</h1>
      <h3>Where customers connect with rental-agents to lease out the products in need</h3>
      <hr></hr>
      <h2>Products available for Renal - </h2>
      <h5>Biking Gears & Camping Equipments and many more...</h5>
      <br></br>
      <hr></hr>
      <p>Do check out available products in the Products Tab</p>
    </div>
  )
}



function Account(){
  return(
    <div>
      This is Account
    </div>
  )
}

function Profile(){
  return(
    <div>
      This is Profile
    </div>
  )
}

function Dashboard(){
  return(
    <div>
      This is Dashboard
    </div>
  )
}

function NotFound(){
  return(
    <div>
      This is NotFound
    </div>
  )
}

export default App;
