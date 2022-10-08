import ProductCard from "./productcard";
import { useState, useEffect } from "react";


export default function ProductList() {


  
  const [data, setData] = useState([]);
 
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://omkardev-app.herokuapp.com/getpost`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.data);
        
      } catch(err) {
        setData(null);
      } 
    }
    getData()
  }, [])


const newdata = [...data]




  // const Rentals = [
  //   {
  //     _id:"633ed1cd83486c9b044198c2",
  //     img: "img 1",
  //     name: "name 1",
  //     hours: 26,
  //     price: 31,
  //     id: "1",
  //   },
  //   {
  //     _id:"633ed1cd83486c9b044198c3",
  //     img: "img 2",
  //     name: "name 2",
  //     hours: 96,
  //     price: 53,
  //     id: "2",
  //   },
  //   {
  //     _id:"633ed1cd83486c9b044198c4",
  //     img: "img 3",
  //     name: "name 3",
  //     hours: 20,
  //     price: 11,
  //     id: "3",
  //   },
  //   {
  //     _id:"633ed1cd83486c9b044198c5",
  //     img: "img 4",
  //     name: "name 4",
  //     hours: 11,
  //     price: 33,
  //     id: "4",
  //   },
  //   {
  //     _id:"633ed1cd83486c9b044198c6",
  //     img: "img 5",
  //     name: "name 5",
  //     hours: 20,
  //     price: 8,
  //     id: "5",
  //   },
  //   {
  //     _id:"633ed1cd83486c9b044198c7",
  //     img: "img 6",
  //     name: "name 6",
  //     hours: 23,
  //     price: 52,
  //     id: "6",
  //   },
  // ];
  
  return (

    <div className="productlist">
    {newdata.map((e) => {
      return (
        <ProductCard
          img={e.img}
          name={e.name}
          hour={e.hours}
          price={e.price}
         />
      );
    })}
  </div>
    
    
  );
}
