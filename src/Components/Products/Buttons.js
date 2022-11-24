import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useEffect } from 'react';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});




export default function Buttons({ prod }) {
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);
  const [need, setNeed] = useState(0)

  const [open, setOpen] = React.useState(false);
  const {name, mrp, discount,quantity, available} = prod;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <Stack id={prod.id} direction="row" spacing={1}>
      {/* <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton> */}
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
            <button onClick={()=>setNeed(need-1)} style={{width:"2rem", height:"1rem"}}>-</button>
            <input min={0} value={need>=0?need:0} max={prod.quantity} type="number" style={{width:"3rem", height:"1rem"}}></input>
            <button onClick={()=>setNeed(need+1)} style={{width:"2rem", height:"1rem"}}>+</button>
        </div>
      <IconButton id={prod.id} onClick={() => { setFav(!fav); }} color="error" aria-label="add to fav">
        {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      <IconButton id={prod.id} disabled={cart} onClick={() => { setCart(true); 
      handleClick();
      fetch('https://632464475c1b435727a76571.mockapi.io/rental-cart', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: name,
    discount: discount,
    quantity:quantity,
    mrp:mrp,
    available:available,
    need:need,
  })
})
  .then(()=>console.log("data sent"))
      }} color="primary" aria-label="add to shopping cart">
        {cart ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />}
        
      </IconButton>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        clicked {(prod.name)}
        </Alert>
      </Snackbar>
    </Stack>

  );
}
