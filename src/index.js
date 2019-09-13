import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ProductDetails from "./product_details";

function App() {
  const [productlist, setProductlist] = useState([
    {
      id: 1,
      name: "Prodcut 1",
      img: "url",
      description: "sdfsdf sdfsd sdfsdf sdfsdf"
    },
    {
      id: 2,
      name: "Prodcut 2",
      img: "url",
      description: "sdfsdf sdfsd sdfsdf sdfsdf"
    },
    {
      id: 3,
      name: "Prodcut 3",
      img: "url",
      description: "sdfsdf sdfsd sdfsdf sdfsdf"
    }
  ]);

  const handleShowList = () =>
    productlist.map(product => <div>{product.name}</div>);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {handleShowList()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
