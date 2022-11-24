import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(id, desc, qty, unit) {
  const price = priceRow(qty, unit);
  return {id, desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}




export default function SpanningTable({prod}) {

    const navigate = useNavigate();

    async function deleteItem(id){
        await fetch(`https://632464475c1b435727a76571.mockapi.io/rental-cart/${id}`, {
          method: 'DELETE'     
        })
          
      }
      
       function checkout(invoicetotal){
         fetch(`https://632464475c1b435727a76571.mockapi.io/rental-checkout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            total:parseInt(invoiceTotal.toFixed(2))                       
          })   
        }).then(alert("going to checkout"))         
      }

      async function clearCart(id){
        await fetch(`https://632464475c1b435727a76571.mockapi.io/rental-cart/${id}`, {
          method: 'DELETE'     
        })
          
      }

      

      
    

    function subtot(p){
        if(p.discount===0){
            return p.mrp
        }else{
            return ((p.mrp)*(100-p.discount))/100
        }
    }
    
    const rows = prod.map((p)=>createRow(p.id, p.name, p.need, subtot(p)))
    
    // const rows = [       
    //     createRow('Paper (Case)', 10, 45.99),
    //   ];
      const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit Price</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.desc}<button onClick={async(e)=>{e.preventDefault(); alert(row.id); await deleteItem(row.id); (setTimeout(window.location.reload(), 4000))}}>remove</button></TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">
                <button onClick={(e)=>{e.preventDefault();checkout(invoiceTotal);rows.forEach((row)=>{clearCart(row.id)}); setTimeout(()=>{navigate("/checkout")},4000)}}>checkout</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}