import * as React from "react";

import { useState, useEffect } from "react";

import SpanningTable from "./CartTable";

import Box from "@mui/material/Box";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const rurl = "https://632464475c1b435727a76571.mockapi.io/rental-cart";

export default function CartList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await fetch(rurl)
          .then((data) => data.json())
          .then((response) => {
            setData(response);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Welcome to Cart</h2>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ bgcolor: "white" }} position="static">
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-between" }}
          ></Toolbar>
        </AppBar>
      </Box>

      {/* <div className="allproducts">
        {data.map((res) => (
          <CartCard prod={res} />
        ))}      
      </div> */}
      <div>
        <SpanningTable prod={data} />
      </div>
    </div>
  );
}
