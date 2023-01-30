import React from "react";
// import AddProduct from "../component/icons/AddProduct";
import EditIcon from "../component/icons/Edit";
import "../style/products.css";
import { paths } from "../utils/data";
import AddButton from "../component/subcomp/AddButton";

export default function Products(prop) {
  const { test } = prop;
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-bar">
          <img src={paths[1].image} alt="product-icon" />
          <p>Бүтээгдэхүүнүүд</p>
        </div>
        <AddButton />
        {/* <button className="add-product"> */}
        {/* <AddButton /> */}
        {/* <AddProduct />
          Бараа нэмэх
        </button> */}

        <div className="filter">
          <button>All</button>
          <input type="search" placeholder="Хайх" />
        </div>
        <div className="product-main"></div>
        <div className="prod-info">
          <p className="prod-detail">Зураг</p>
          <p className="prod-detail">Барааны нэр</p>
          <p className="prod-detail">Үнэ</p>
          <p className="prod-detail">Үлдэгдэл</p>
          <p className="prod-detail">Хямдрал %</p>
          <p className="prod-detail">Категори</p>
          <button>
            <EditIcon />
          </button>
        </div>
        <div className="products">
          {test &&
            test.map((products, index) => (
              <div key={index} className="product-list">
                <img
                  src={products.image}
                  alt="product-picture"
                  className="prod-detail"
                />
                <p className="prod-detail">{products.name}</p>
                <p className="prod-detail">{products.price}</p>
                <p className="prod-detail">{products.stock}</p>
                <p className="prod-detail">{products.sale}</p>
                <div className="prod-detail">{products.category}</div>
                <button>
                  <EditIcon />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
