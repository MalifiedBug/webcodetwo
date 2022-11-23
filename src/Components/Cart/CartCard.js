import * as React from 'react';
import { useState } from 'react';

export default function CartCard({ prod }) {

  const[inc, setInc] = useState(0);

  return (
    <div className='productcard'>
      <div>
        <img className='productimage' src={prod.img} alt={prod.name}></img>
      </div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem", textAlign: "start" }} className='productsponsortag'>
        <div>{prod.issponsored ? <p><u>sponsored❕</u></p> : null}</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
            <button onClick={()=>setInc(inc-1)} style={{width:"2rem", height:"1rem"}}>-</button>
            <input min={0} value={inc>=0?inc:0} max={prod.quantity} type="number" style={{width:"3rem", height:"1rem"}}></input>
            <button onClick={()=>setInc(inc+1)} style={{width:"2rem", height:"1rem"}}>+</button>
        </div>
      </div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }} className='productname'>
        <h3>{prod.name}</h3>
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
      <div style={{ textAlign: "start", paddingLeft: "1rem", paddingRight: "1rem" }} className='productrating'>
        {inc>=0?<h3>
          Sub-Total : ₹ {
            (prod.discount) !== 0 ? ((prod.mrp) * (100-(prod.discount))/100)*inc : (inc*prod.mrp)
          }
        </h3>:<h3 style={{color:"red"}}>Enter a valid quantity</h3>}
      </div>
    </div>
  );
}
