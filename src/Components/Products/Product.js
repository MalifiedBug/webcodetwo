import * as React from 'react';
import  Buttons  from './Buttons';
import { BasicRating } from './BasicRating';

export default function Product({ prod }) {


  return (
    <div className='productcard'>
      <div>
        <img className='productimage' src={prod.img} alt={prod.name}></img>
      </div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem", textAlign: "start" }} className='productsponsortag'>
        <div>{prod.issponsored ? <p><u>sponsored❕</u></p> : null}</div>
        <div>
          <Buttons prod={prod} />
        </div>
      </div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }} className='productname'>
        <h3>{prod.name}</h3>
      </div>
      <div style={{ textAlign: "start", paddingLeft: "1rem", paddingRight: "1rem" }} className='productrating'>
        <BasicRating prod={prod} />
      </div>
      <div>
        {prod.isdeal ? <div style={{ textAlign: "start", paddingLeft: "1rem", paddingRight: "1rem" }} className='productdeal'>
          <p>Deal of the Day</p>
        </div> : null}
      </div>

      <div style={{ textAlign: "start", paddingLeft: "1rem", paddingRight: "1rem" }} className='productprice'>
        {(prod.discount) !== 0 ? <h3>₹{(prod.mrp) * (100-(prod.discount)) / 100}</h3> : <h3>₹{prod.mrp}</h3>}

        <span>&ensp;
          {(prod.discount) !== 0 ? <s>(₹{prod.mrp})</s> : ""}

          &ensp;</span>
        <span>
          {(prod.discount) !== 0 ? <h4>({prod.discount}%off)</h4> : ""}

        </span>
      </div>
      <div style={{ textAlign: "start", paddingLeft: "1rem", paddingRight: "1rem" }} className='productestimatedelivery'>
        <p>Get it by <b>{prod.deliverydate}</b></p>
      </div>
    </div>
  );
}
