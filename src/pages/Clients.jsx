import React from "react";
import { useState } from "react";
import axios from "axios";
import { paths } from "../utils/data";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductProvider";
import AddButton from "../component/subcomp/AddButton";
import AddUser from "../component/subcomp/AddUser";

const newProduct = { name: "Iphone 17", price: 210000 };
export default function Clients(prop) {
  const { user } = prop;
  const [singleProd, setSingleProd] = useState(undefined);
  const [show, setShow] = useState(false);
  const { product } = useContext(ProductsContext);

  // function getSingleProdHandler() {
  //   fetch("http://localhost:4000/users/1")
  //     .then((res) => res.json())
  //     .then((res) => setSingleProd(res))
  //     .catch((err) => {
  //       console.log("Error:", err.message);
  //     });
  // }
  // function addProductHandler(product) {
  //   axios.post("http://localhost:4000/add", product);
  //   // fetch("http://localhost:2021/add", {
  //   //   method: "POST",
  //   //   headers: { 'Content-Type': 'application/json' },
  //   //   body: JSON.stringify(product)
  //   // })
  // }
  // function deleteProductHandler(id) {
  //   axios.delete(`http://localhost:4000/product/${id}`);
  // }
  return (
    <div>
      <div className="product-bar">
        <img src={paths[3].image} alt="product-icon" />
        <p>Хэрэглэгчид</p>
      </div>
      <AddUser />
    </div>
  );
}
{
  /* <div>
    {user && user.map((users, index) => (
          <div key={index}>
            <h2>{users.surname}</h2>
          </div>
        ))}
  </div>; */
}
