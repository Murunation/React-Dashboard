import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddProduct from "../icons/AddProduct";
import { ProductsContext } from "../../context/ProductProvider";

export default function AddUser() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const { product } = useContext(ProductsContext);
  const handleClose = () => {
    setShow(false);
    setProduct(undefined);
  };
  return (
    <div className="user-button-main">
      <Button variant="primary" className="add-button" onClick={handleShow}>
        <AddProduct />
        Хэрэглэгч нэмэх
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Бараа нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form >
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
