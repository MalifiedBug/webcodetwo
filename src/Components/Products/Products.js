import * as React from 'react';




import { useState, useEffect } from 'react';

import  Product from './Product';


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


const rurl = "https://632464475c1b435727a76571.mockapi.io/rental"


export default function Products() {

  const [category, setCategory] = React.useState('');



  

  const[data,setData] = useState([]);


  const [search, setSearch] = useState("")



  const filteredArray = data.filter((dat)=>dat.name.toLowerCase().split(" ").join("").includes(search.toLowerCase()))

  const handleChange = (event) => {
    setCategory(event.target.value);
    setSearch(event.target.value)
  };

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
      <h2>Welcome to our Products Page</h2>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: "white" }} position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(e)=>{handleChange(e)}}
                >
                  <MenuItem value="Biking">Biking</MenuItem>
                  <MenuItem value="Camping">Camping</MenuItem>
                  {/* <MenuItem value={30}>Trekking</MenuItem> */}
                </Select>
                {console.log({ category })}
              </FormControl>
            </Box>
            <Search sx={{ bgcolor: "#edf2ff", color: "black" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="allproducts">
        {filteredArray.map((res) => (
          <Product prod={res}  />
        ))}
        {/* {data.map((dat) => (
          <Product prod={dat} />
        ))} */}
      </div>
    </div>
  );
}



