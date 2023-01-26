import React from "react";

export default function Orders(prop) {
  const {order} = prop
  return <div>
       {order && order.map((orders, index) => (
          <div key={index}>
            <h2>{orders.orderNo}</h2>
          </div>
        ))}
  </div>;
}
