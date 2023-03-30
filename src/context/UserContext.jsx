import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserHandlers({ children }) {
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);
  function userdelete(name) {
    axios
      .delete(`http://localhost:4000/deleteUser?name=${name}`)
      .then((res) => res.statusText === "OK" && alert("Delete"));
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/getUser")
      .then((response) => setUser(response.data));
  }, []);
  return (
    <UserContext.Provider value={{ user, count, setCount, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
