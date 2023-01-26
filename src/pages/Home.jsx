import React from "react";
import EditIcon from "../component/icons/Edit";
import ImageIcon from "../component/icons/ImageIcon";
import "../style/home.css";
import {paths} from "../utils/data"

export default function Home(prop) {
  const {test} = prop
  return <div className="dashboard-content">
    <div className="dashboard">
        <div className="dashboard-bar">
          <img src={paths[0].image} alt="product-icon" />
          <p>Хянах самбар</p>
        </div>
        <div className="later-sold">
          <p>Сүүлд зарагдсан</p>
          <ImageIcon/>
        </div>
        <div className="dash-info">
          <p>Зураг</p>
          <p>Барааны нэр</p>
          <p>Үнэ</p>
          <p>Үлдэгдэл</p>
          <p>Хямдрал %</p>
          <p>Категори</p>
          <button><EditIcon/></button>
        </div>
    {test && test.map((products, index) => (
          <div key={index} className="product-list">
            <img src={products.image} alt="" />
            <p className="list-name">{products.name}</p>
            <p>{products.price}</p>
            <p>{products.stock}</p>
            <p>{products.sale}</p>
            <div className="product-category">
              {products.category}
            </div>
            <button><EditIcon/></button>
          </div>
        ))}
    </div>
    
  </div>;
}
