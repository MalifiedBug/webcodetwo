import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
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




export default function Nav({search}){
    const navigate = useNavigate();
    const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <Paper className="Navbar" elevation={6} >

        
            <div>
            <Button variant="contained" size="small" onClick={()=>{navigate('/products')}}>Products</Button>
            </div>
            <div>


            <Box sx={{ minWidth: 90, maxWidth: 110 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label=""
          onChange={handleChange}
        >
          <MenuItem value="studio">Studio</MenuItem>
          <MenuItem value="bikes">Bikes</MenuItem>
          <MenuItem value="costumes">Costumes</MenuItem>
        </Select>
      </FormControl>
    </Box>
            </div>
            
            <Search className='searchbar'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>            <div>
            <Button variant="contained" size="small" onClick={()=>{navigate('/contactus')}}>Contact Us</Button>

            </div>
            <div>
            <Button variant="contained" size="small" onClick={()=>{navigate('/cart')}}>Cart</Button>

            </div>     

       

        </Paper>
        
    )
}