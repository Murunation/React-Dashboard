import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProduct from "../icons/AddProduct";
import "../../style/substyle/addbutton.css";
import axios from "axios";

export default function AddButton(prop) {
  const { show, setShow, data, setProduct } = prop;
  const [image, setImage] = useState();

  const handleClose = () => {
    setShow(false);
    setProduct(undefined);
  };
  const handleShow = () => setShow(true);

  function submitHandler(e) {
    e.preventDefault();

    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
      stock: e.target.stock.value,
      sale: e.target.sale.value,
      category: e.target.category.value,
      description: e.target.description.value,
      brand: e.target.brand.value,
      created_date: e.target.created_date.value,
      update_date: e.target.update_date.value,
    };

    const productForm = new FormData();

    productForm.append("file", e.target.image.files[0]);
    productForm.append("details", JSON.stringify(product));

    fetch("http://localhost:4000/addproduct", {
      method: "POST",
      mode: "cors",
      body: productForm,
    });
    console.log(e.target.image.files[0]);
    setShow(true);
    location.reload();
  }

  return (
    <div className="main-button">
      <Button variant="primary" className="add-button" onClick={handleShow}>
        <AddProduct />
        Бараа нэмэх
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Бараа нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitHandler}>
            <div className="add-detail">
              <div className="right-detail">
                <div className="product-info">
                  <input type="file" name="image" />
                  {/* onChange={changeHandler} */}
                  <input type="button" value={"Upload"} />
                  <p>Барааны нэр</p>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    defaultValue={data ? data.name : ""}
                  />
                </div>
                <div>
                  <p>Үлдэгдэл</p>
                  <input
                    type="text"
                    placeholder="Stock"
                    name="stock"
                    defaultValue={data ? data.stock : ""}
                  />
                </div>
              </div>
              <div className="left-detail">
                <div className="product-info">
                  <p>Барааны үнэ (₮)</p>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    defaultValue={data ? data.price : ""}
                  />
                </div>
                <div className="product-info">
                  <p>Хямдрал (%-иар)</p>
                  <input
                    type="text"
                    placeholder="Sale"
                    name="sale"
                    defaultValue={data ? data.sale : ""}
                  />
                </div>
              </div>
            </div>
            <h5>Үзүүлэлтүүд</h5>
            <div className="add-detail">
              <div className="right-detail">
                <div className="product-info">
                  <h6>Категори сонгох</h6>
                  <select
                    name="category"
                    defaultValue={data ? data.category : ""}
                  >
                    <option>ЗУРАГТ, ТВ, ДЭЛГЭЦ</option>
                    <option>ГАР УТАС, ЦАГ</option>
                    <option>ГАЛ ТОГОО</option>
                    <option>КОМПЬЮТЕР, ПРИНТЕР</option>
                    <option>БУСАД</option>
                  </select>
                </div>
                <div className="product-info">
                  <p>Created Date</p>
                  <input
                    type="date"
                    placeholder="Descripsion"
                    name="created_date"
                    defaultValue={data ? data.descrip : ""}
                  />
                </div>
                <div className="product-info">
                  <p>update Date</p>
                  <input
                    type="date"
                    placeholder="Descripsion"
                    name="update_date"
                    defaultValue={data ? data.descrip : ""}
                  />
                </div>
              </div>
              <div className="left-detail">
                <div className="product-info">
                  <p>Тайлбар</p>
                  <input
                    type="text"
                    placeholder="Descripsion"
                    name="description"
                    defaultValue={data ? data.descrip : ""}
                  />
                </div>
                <div className="product-info">
                  <h6>Брэнд сонгох</h6>
                  <select name="brand" defaultValue={data ? data.brand : ""}>
                    <option>SAMSUNG</option>
                    <option>LG</option>
                    <option>IPHONE</option>
                  </select>
                </div>
              </div>
            </div>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Хаах
              </Button>
              <button type="submit" onClick={handleClose}>
                save
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
