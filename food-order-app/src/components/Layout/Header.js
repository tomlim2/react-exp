import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import perspectiveImages from "../../assets/perspectiveImg.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={perspectiveImages} alt="Trees" />
      </div>
    </>
  );
};

export default Header;
