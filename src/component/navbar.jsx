import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  navbar: {
    background: "#121212",
    color: "#fff",
    height: "3vh",
    padding: 0
  },

});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <h2 >Gilnov</h2>
    </div>
  );
};

export default Navbar;
