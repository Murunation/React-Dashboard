import React from "react";
import "../style/products.css";

export default function Products(prop) {
  const {test}= prop;
  return (
    <div className="product">
      <div className="products">
        {test && test.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
      
    </div>
  );
}
