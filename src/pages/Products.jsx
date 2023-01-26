import React from "react";
import AddProduct from "../component/icons/AddProduct";
import EditIcon from "../component/icons/Edit";
import "../style/products.css";
import {paths} from "../utils/data"


export default function Products(prop) {
  const {test}= prop;
  return (
    <div className="product">
      <div className="product-content">
             <div className="product-bar">
                <img src={paths[1].image} alt="product-icon" />
                <p>Бүтээгдэхүүнүүд</p>
            </div>
            <button className="add-product">
              <AddProduct/>
              Бараа нэмэх</button>
              <div className="filter">
                <button>All</button>
                <input type="search" placeholder="Хайх" />
              </div>
              <div className="product-main">
                
              </div>
              <div className="prod-info">
          <p>Зураг</p>
          <p>Барааны нэр</p>
          <p>Үнэ</p>
          <p>Үлдэгдэл</p>
          <p>Хямдрал %</p>
          <p>Категори</p>
          <button><EditIcon/></button>
        </div>
        <div className="products">
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
      </div>
       
      
    </div>
  );
}
