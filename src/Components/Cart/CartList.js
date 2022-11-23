import * as React from 'react';




import { useState, useEffect } from 'react';

import CartCard from './CartCard';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const rurl = "https://632464475c1b435727a76571.mockapi.io/rental-cart"


export default function CartList() {

  const[data,setData] = useState([]);


  useEffect(()=>{
    
    (async()=>{
      try {

        await fetch(rurl)
        .then(data=>data.json())
        .then((response)=>{
          setData(response);
        })
        
      } catch (error) {
        console.log(error)        
      }
      
    })();
  },[])


  return (
    <div>
      <h2>Welcome to Cart</h2>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: "white" }} position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                
          </Toolbar>
        </AppBar>
      </Box>

      <div className="allproducts">
        {data.map((res) => (
          <CartCard prod={res} />
        ))}

        <button style={{margin:"1rem"}}>Proceed to Checkout</button>
       
      </div>
    </div>
  );
}



