import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../public/logo.svg"

const useStyles = createUseStyles({
  navbar: {
    background: "#121212",
    color: "#fff",
    padding: "20px",
    display: "flex"
  },

});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
