import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import SideMenu from "./component/SideMenu";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
