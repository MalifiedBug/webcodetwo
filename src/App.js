import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from './navbar';
import Products from './products';
import Cart from './cart';
import Header from './pageheader';
import Checkout from './checkout';
import { BasicForm } from './contactus';
import Paper from '@mui/material/Paper';





function App() {
  return (

    <Paper className='paperapp' elevation={6}>

     <div className="App">
      <Header />
      <Nav />
      <Paper style={{backgroundColor :"wheat"}} className='routes' elevation={4}>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<BasicForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>


      </Paper>
    

     
      
      
      
    </div>

    </Paper>
    
  );
}

export default App;
