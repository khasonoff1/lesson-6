import { useContext } from "react";
import Button from "../../button/Button";
import "./mainCard.css";

import PropTypes from "prop-types";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { CartContext } from "../../../contexts/CartContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MainCard = ({
  id,
  filter,
  image,
  name,
  description,
  desc,
  price,
  discount,
}) => {
  const {
    lang: {
      btn: { choose },
    },
  } = useContext(LanguageContext);

  const { addToCart } = useContext(CartContext);
  const discountPr = +price - Math.ceil((discount / 100) * price);

  return (
    <div className="mainCard">
      <div className="img-box">
        {filter ? <span className="cardFilter">{filter}</span> : <></>}
        <LazyLoadImage effect="blur" width="280" src={image} alt="" />
      </div>
      <div className="cardBody">
        <h5 className="cardTitle">{name}</h5>
        <p className="cardText">{description || desc}</p>
        <div className="cardFooter">
          <Button onClick={() => addToCart(id)}>{choose}</Button>

          {discount ? (
            <div className="text-center">
              <span className="discoundPr">{discountPr}</span>
              <p>
                от <span className="text-decoration-line-through">{price}</span>{" "}
                ₽
              </p>
            </div>
          ) : (
            <p>от {price} ₽</p>
          )}
        </div>
      </div>
    </div>
  );
};

MainCard.propTypes = {
  id: PropTypes.string,
  filter: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  desc: PropTypes.string,
  price: PropTypes.string,
  discount: PropTypes.number,
};

export default MainCard;
