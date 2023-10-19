import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../data/products";
import { CARTS } from "../constants";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem(CARTS)) || []
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const controlQuantity = (id, sign) => {
    const res = carts.map((pr) => {
      if (pr.id === id) {
        sign === "+" ? pr.quantity++ : pr.quantity--;
      }
      return pr;
    });
    return res;
  };

  const addToCart = (id) => {
    let product = products.find((pr) => pr.id === id);
    let productInCarts = carts.find((pr) => pr.id === id);

    let newCarts;
    if (productInCarts) {
      newCarts = controlQuantity(id, "+");
    } else {
      product.quantity = 1;
      newCarts = [...carts, { ...product, price: +product.price }];
    }
    setCarts(newCarts);
    localStorage.setItem(CARTS, JSON.stringify(newCarts));
  };

  const increaseQuantity = (id) => {
    const newCarts = controlQuantity(id, "+");

    setCarts(newCarts);
    localStorage.setItem(CARTS, JSON.stringify(newCarts));
  };
  const decreaseQuantity = (id) => {
    let newCarts;
    let productInCarts = carts.find((pr) => pr.id === id);
    if (productInCarts.quantity > 1) {
      newCarts = controlQuantity(id, "-");
    } else {
      newCarts = carts.filter((pr) => pr.id !== id);
    }
    setCarts(newCarts);
    localStorage.setItem(CARTS, JSON.stringify(newCarts));
  };

  let totalPrice = carts.reduce(
    (acc, pr) =>
      acc +
      (pr.discount
        ? pr.price - Math.ceil((pr.discount / 100) * pr.price)
        : pr.price) *
        pr.quantity,
    0
  );

  const state = {
    carts,
    show,
    totalPrice,
    handleClose,
    handleShow,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CartContextProvider;
