import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export function Buttons({ prod }) {
  const [fav, setFav] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <Stack id={prod.id} direction="row" spacing={1}>
      {/* <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton> */}
      <IconButton id={prod.id} onClick={() => { setFav(!fav) }} color="error" aria-label="add to fav">
        {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>

      <IconButton id={prod.id} disabled={cart} onClick={() => { setCart(true); }} color="primary" aria-label="add to shopping cart">
        {cart ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />}
      </IconButton>
    </Stack>

  );
}
