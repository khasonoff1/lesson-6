import { useContext } from "react";

import PropTypes from "prop-types";
import { CartContext } from "../../../contexts/CartContext";

import "./cartCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CartCard = ({
  id,
  image,
  name,
  description,
  desc,
  price,
  quantity,
  discount,
}) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const discountPr = price - Math.ceil((discount / 100) * price);

  return (
    <div className="cartCard">
      <div className="imgBox">
        <LazyLoadImage effect="blur" width="94" height="94" src={image} alt={name} />
      </div>
      <div className="cardBody">
        <h5>{name}</h5>
        <p className="text">{description ? description : desc}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div className="btn-group">
            <button
              onClick={() => decreaseQuantity(id)}
              className="btn quantity-btn"
            >
              -
            </button>
            <span className="quantity-btn">{quantity}</span>
            <button
              onClick={() => increaseQuantity(id)}
              className="btn quantity-btn"
            >
              +
            </button>
          </div>
          {discount ? (
            <div className="cartCardFooter text-start">
              <span className="discoundPr">{discountPr}</span>
              <p className="price">
                <span className=" text-decoration-line-through">{price}</span> ₽
              </p>
            </div>
          ) : (
            <p className="price">{price} ₽</p>
          )}
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  discount: PropTypes.number,
};

export default CartCard;
