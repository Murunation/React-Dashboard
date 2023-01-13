import React from "react";
import "../style/sidemenu.css";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();
  const urlChangeHandler = () => {
    navigate("products");
  };
  const urlHome = () => {
    navigate("/");
  };
  const urlUsers = () => {
    navigate("users");
  };
  return (
    <div className="sideMenu">
      <button onClick={urlHome}>Home</button>
      <button onClick={urlChangeHandler}>Products</button>
      <button onClick={urlUsers}>Users</button>
    </div>
  );
}
