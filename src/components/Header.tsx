import React, { useState } from "react";
import classes from "./Header.module.css";

import search from "../img/search.svg";
import favorite from "../img/favorite.svg";
import profile from "../img/profile.svg";
import cart from "../img/cart.svg";

import videocard from "../img/nav/videocard.svg";
import cpu from "../img/nav/cpu.svg";
import ram from "../img/nav/ram.svg";
import motherboard from "../img/nav/motherboard.svg";
import compCase from "../img/nav/case.svg";
import cpuFan from "../img/nav/cpuFan.svg";
import hhd from "../img/nav/hhd.svg";
import power from "../img/nav/power.svg";

const Header = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const handleLoginHover = () => {
    setIsLoginHovered(true);
    console.log("login hover");
  };
  const handleLoginLeave = () => {
    setIsLoginHovered(false);
  };

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.header__container}>
          <ul className={classes.header__row}>
            <li>
              <button className={classes.menu__main_button}></button>
            </li>
            <li>
              <div className={classes.search}>Поиск</div>
            </li>
            <li>
              <button className={classes.menu__btn}>
                <img src={favorite} alt="img_favorite" />
                <h2>Избранное</h2>
              </button>
              <button className={classes.menu__btn}>
                <img src={cart} alt="img_cart" />
                <h2>Корзина</h2>
              </button>
              <button
                className={classes.menu__btn}
                onMouseEnter={handleLoginHover}
              >
                <img src={profile} alt="img_profile" />
                <h2>Войти</h2>
              </button>
            </li>
          </ul>
          <div
            className={classes.login_popup}
            onMouseLeave={handleLoginLeave}
            style={{
              transition: "all 0.4s",
              transformOrigin: "top right",
              transform: isLoginHovered ? "scale(1)" : "scale(0)",
            }}
          >
            <div className={classes.login__right_section}>
              <h3 className={classes.login__title}>
                Получайте бонусы, сохраняйте и отслеживайте заказы
              </h3>
              <button className={classes.login__inner_button}>
                <h3>Войти</h3>
              </button>
              <a href="!#">Узнать статус заказа</a>
              <br />
              <a href="!#">Обратная связь</a>
              <br />
              <a href="!#">Обмен, возврат, гарантия</a>
              <br />
            </div>
          </div>
        </div>
        <div className={classes.nav__wrapper}>
          <div className={classes.nav}>
            <button>
              <img src={videocard} alt="img videocard" />
              <h3>Видеокарта</h3>
            </button>
            <button>
              <img src={cpu} alt="img cpu" />
              <h3>Процессор</h3>
            </button>
            <button>
              <img src={motherboard} alt="motherboard" />
              <h3>Мат. плата</h3>
            </button>
            <button className={classes.ram__btn}>
              <img src={ram} alt="img ram" className={classes.ram__img} />
              <h3>Оперативная память</h3>
            </button>
            <button>
              <img src={compCase} alt="img case" />
              <h3>Корпус</h3>
            </button>
            <button>
              <img src={cpuFan} alt="img fan" />
              <h3>Охлаждение</h3>
            </button>
            <button>
              <img src={hhd} alt="img hard disk" />
              <h3>Накопители</h3>
            </button>
            <button>
              <img src={power} alt="img power supply" />
              <h3>Блок питания</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
