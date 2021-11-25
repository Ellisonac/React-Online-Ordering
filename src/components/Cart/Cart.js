import React from "react";
import Button from "../UI/Button";
import classes from "./Cart.module.css";

//Primarily modal behavior, with a open button in the banner

const Cart = (props) => {
  return (
    <>
      <Button onClick={props.onClick} type={props.type} className={classes.button}>Cart</Button>
      <div className={classes.cart}></div>
    </>
  );
};

export default Cart;
