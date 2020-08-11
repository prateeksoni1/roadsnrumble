import React from "react";
import classes from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={[classes.nav, classes.light].join(" ")}>
      <div className={[classes.navContainer, classes.container].join(" ")}>
        <div className={classes.logo}>roads'nrumble</div>
        <div className={classes.spacer}></div>
        <div className={classes.navItem}>contact</div>
        <div className={classes.navItem}>blogs</div>
        <div className={classes.navItem}>shop</div>
      </div>
    </nav>
  );
};

export default Navbar;
