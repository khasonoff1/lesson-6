import { Fragment, useContext, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

import location from "../../assets/images/location.svg";
import account from "../../assets/images/account.svg";
import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";
import { LanguageContext } from "../../contexts/LanguageContext";
import basket from "../../assets/images/basket.svg";

import "./header.css";
import { CartContext } from "../../contexts/CartContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  const {
    lang: {
      topHead: {
        region: { moscow },
        address,
        deliveryTime,
        workTime,
        loginTo,
      },
      nav: { sale, pizza, sushi, drinks, snak, combo, dessert, sauce, more },
    },
    switchLang,
    langType,
  } = useContext(LanguageContext);
  const { totalPrice, handleShow } = useContext(CartContext);

  const navbarRef = useRef();
  const navRef = useRef();

  useEffect(() => {
    const element = navRef.current;
    const element2 = navbarRef.current;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        element.style.bottom = "0";
        element2.style.boxShadow =
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px";
        element2.style.backdropFilter = "blur(20px)";
        element2.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
      } else {
        element.style.bottom = "-100px";
        element2.style.boxShadow = "none";
        element2.style.backdropFilter = "unset";
        element2.style.backgroundColor = "var(--lyt-clr)";
      }
    });
  });

  return (
    <Fragment>
      <div id="header" className="box1">
        <div className="container">
          <div className="top-header">
            <div className="delivery d-flex align-items-center gap-5">
              <div className="location d-flex align-items-center gap-2">
                <LazyLoadImage effect="blur" src={location} alt="location" />
                <span>{moscow}</span>⌵
              </div>
              <p className="address">{address}</p>
              <p className="delivery-time">
                {deliveryTime}*: <span className="time">00:24:19</span>
              </p>
            </div>
            <div className="d-flex align-items-center gap-5">
              <p>{workTime}</p>
              <div className="login d-flex align-items-center gap-2">
                <LazyLoadImage effect="blur" src={account} alt="" />
                <span>{loginTo}</span>
              </div>
              <Form.Group>
                <Form.Select value={langType} onChange={switchLang}>
                  <option value="ru">RU</option>
                  <option value="en">EN</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="nav-box" ref={navbarRef}>
        <div className="container box2">
          <nav>
            <a href="#header">
              <div className="logo">
                <LazyLoadImage effect="blur" src={logo} alt="logo" />
                <span>Куда пицца</span>
              </div>
            </a>
            <ul className="navb" ref={navRef}>
              <li className="nav-item">
                <a className="nav-link" href="#Акции">
                  {sale}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Пицца">
                  {pizza}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Комбо">
                  {combo}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Суши">
                  {sushi}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#Соусы">
                  {sauce}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Десерты">
                  {dessert}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Напитки">
                  {drinks}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Закуски">
                  {snak}
                </a>
              </li>
              <li className="nav-item">
                <p className="nav-link">{more} ⌵</p>
              </li>
            </ul>
          </nav>
          <Button onClick={handleShow}>
            <LazyLoadImage effect="blur" src={basket} alt="" />
            <p>{totalPrice} ₽</p>
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
