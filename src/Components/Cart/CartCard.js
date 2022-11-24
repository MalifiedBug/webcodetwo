import * as React from 'react';

export default function CartCard({ prod }) {

  async function deleteItem(){
    await fetch(`https://632464475c1b435727a76571.mockapi.io/rental-cart/${prod.id}`, {
      method: 'DELETE'     
    })
      
  }

  return (
    <div className='productcard'>
      <div>
        <img className='productimage' src={prod.img} alt={prod.name}></img>
      </div>
      <div style={{ paddingLeft: "1rem", paddingRight: "1rem", textAlign: "start" }} className='productsponsortag'>
        <div>{prod.issponsored ? <p><u>sponsored❕</u></p> : null}</div>
        
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
      <h1>Quantity: {prod.need}</h1>
      <div style={{ textAlign: "start", paddingLeft: "1rem", paddingRight: "1rem" }} className='productrating'>
        {prod.need>=0?<h3>
          Sub-Total : ₹ {
            (prod.discount) !== 0 ? ((prod.mrp) * (100-(prod.discount))/100)*prod.need : (prod.need*prod.mrp)
          }
        </h3>:<h3 style={{color:"red"}}>Enter a valid quantity</h3>}
      </div>
      <button onClick={async(e)=>{e.preventDefault(); alert(prod.id); await deleteItem(); (setTimeout(window.location.reload(), 4000))}}>delete</button>
    </div>
  );
}
