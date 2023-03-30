import React from "react";
import { useState } from "react";
import axios from "axios";
import { paths } from "../utils/data";
import { useContext } from "react";
import AddButton from "../component/subcomp/AddButton";
import { UserContext } from "../context/UserContext";

export default function Clients() {
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  console.log(user);
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
      <AddButton show={show} setShow={setShow} />
      <div className="users">
        {user &
          user.map((user, index) => (
            <div key={index}>
              <p>{user && user.lastname}</p>
              <p>{user.role}</p>
            </div>
          ))}
      </div>
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
