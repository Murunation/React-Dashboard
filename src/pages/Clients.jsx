import React from "react";

export default function Clients(prop) {
  const {user} = prop;
  return <div>
    {user && user.map((users, index) => (
          <div key={index}>
            <h2>{users.surname}</h2>
          </div>
        ))}
  </div>;
}
