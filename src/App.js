import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import "./style/App.css";
import Clients from "./pages/Clients";
import axios from "axios"
import { useEffect, useState } from "react";
function App() {
  const [product, setProduct] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((products) => setProduct(products.data));
  }, []);
  console.log(product);
  
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/control" element={<Home test={product} />}/>
          <Route path="/products" element={<Products test={product}/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
