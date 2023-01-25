import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import "./style/App.css";
import Clients from "./pages/Clients";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/control" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/clients" element={<Clients />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
