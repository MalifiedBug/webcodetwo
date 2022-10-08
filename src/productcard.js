import { useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ProductCard({img, name, hour, price}){

const [toggle, setToggle] = useState(true)



const togglee =()=>{
    setToggle(!toggle);
}




    return(
        <div className="productcard">

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {hour},{price}
        </Typography>
      </CardContent>
      <CardActions>
        {toggle ? <Button variant="outlined" size="small" onClick={togglee}>Add to Cart</Button> : <Button size="small" disabled>Add to Cart</Button>}
        {!toggle ? <Button size="small" onClick={togglee}>Remove from cart</Button>: <Button size="small" disabled>Remove from cart</Button>}
                   
      </CardActions>
    </Card>

            
        </div>
    )
} 