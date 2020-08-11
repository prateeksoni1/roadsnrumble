import React from "react";
import classes from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={[classes.nav, classes.light].join(" ")}>
      <div className={classes.navContainer}>
        <div className={classes.logo}>roads'nrumble</div>
      </div>
    </nav>
  );
};

export default Navbar;
