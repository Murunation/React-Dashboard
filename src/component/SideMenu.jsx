import React from "react";
import "../style/sidemenu.css";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();
  const urlProduct = () => {
    navigate("products");
  };
  const urlHome = () => {
    navigate("/");
  };
  const urlOrders = () => {
    navigate("orders");
  };
  const urlClients = () => {
    navigate("clients");
  };
  return (
    <div className="sideMenu">
      <button onClick={urlHome}>Хянах самбар</button>
      <button onClick={urlProduct}>Бүтээгдэхүүнүүд</button>
      <button onClick={urlOrders}>Захиалгууд</button>
      <button onClick={urlClients}>Хэрэглэгчид</button>
    </div>
  );
}
