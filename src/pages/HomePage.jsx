import { Fragment, useContext } from "react";
import CategoryCard from "../components/card/categoryCard/CategoryCard";

import { categories } from "../data/categories";

import MainCard from "../components/card/mainCard/MainCard";
import { products } from "../data/products";
import filterImg from "../assets/images/filter.svg";
import { Button, Modal } from "react-bootstrap";

import { LanguageContext } from "../contexts/LanguageContext";

import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/card/cartCard/CartCard";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "../css/homePage.css";

const HomePage = () => {
  const {
    lang: {
      btn: { filter },
      modal: { head, btn: btn1, total },
      checkAddress,
      address,
      check,
    },
  } = useContext(LanguageContext);
  const { carts, show, handleClose, totalPrice } = useContext(CartContext);

  const newProducts = products.filter((pr) => (pr.discount ? pr : null));

  return (
    <Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {head} <span className="badge">{carts.length}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {carts.map((cart, i) =>
            carts.length > 0 ? <CartCard key={i} {...cart} /> : null
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <p className="modal-total">
            {total}: {totalPrice} ₽
          </p>
          <Button className="modal-btn" variant="primary" onClick={handleClose}>
            {btn1}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        <div
          id="category"
          className="categories d-flex justify-content-between"
        >
          <CategoryCard name={"Акции"} image={"/categories/sale.svg"} />
          {categories.map((ctgr, i) => (
            <CategoryCard key={i} {...ctgr} />
          ))}
        </div>
        <div className="cards">
          <section id="Акции" className="categories-box pt-5">
            <div className="ctgrBox d-flex align-items-center justify-content-between"></div>
            <div className="row">
              {newProducts.slice(0, 4).map((pr) => (
                <div className="col-3" key={pr.id}>
                  <MainCard {...pr} />
                </div>
              ))}
            </div>
          </section>
          <div className="checkAddress">
            <p>{checkAddress}</p>
            <form className="d-flex gap-4">
              <input type="text" placeholder={address} />
              <button>{check}</button>
            </form>
          </div>
          {categories.map((ctgr, i) => (
            <section className="categories-box" id={ctgr.name} key={i}>
              <div className="ctgrBox d-flex align-items-center justify-content-between">
                <h2 className="ctgrTitle">{ctgr.name}</h2>
                <button className="filter-btn">
                  <LazyLoadImage effect="blur" src={filterImg} alt="filter" />
                  {filter}
                </button>
              </div>
              <div className="row">
                {products.map((pr) =>
                  ctgr.name === pr.category ? (
                    <div className="col-3" key={pr.id}>
                      <MainCard {...pr} />
                    </div>
                  ) : null
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
