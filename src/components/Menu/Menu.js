import React from "react";
import classes from "./Menu.module.css";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

const Menu = props => {
  return (
    <Card>
      <p>test</p>
      <ul className={classes.menu}>
        <h2>Menu!</h2>
        <MenuItem></MenuItem>
      </ul>
    </Card>
  );
};

export default Menu;
