import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Start from "./startenddatecomp";
// import { useState } from 'react';
import React from 'react'
// import { Helmet } from 'react-helmet';



export default function Cart(){
    // const [change, setChange ] = useState(0)
     const navigate = useNavigate();
    return(
        <div className="cart">
             
            <div className="carticon"><h1>Cart</h1></div>
            <div>
                <h3>Total number of days to rent</h3>
                <Start />
           </div>
           <hr />
           <div className='quantity'>
           <Button onClick="setChange(e.value)" value=""  size="small" variant='contained'>-</Button>   
            <input type='number' min="0"/>
            <Button size="small" variant='contained'>+</Button>   

           </div>
            <div className="addedtocart"></div>
            <div className="checkout">
            <Button variant="contained" size="large" onClick={()=>{navigate('/checkout')}}>Checkout</Button>
          
            </div>
        </div>
    )
}