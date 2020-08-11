import React from "react";
import classes from "./index.module.scss";

const IndexPage = () => {
  return (
    <div className={classes.screen}>
      <div className={[classes.heroContent, classes.container].join(" ")}>
        <div className={classes.column}>
          <h1>Roads 'N Rumbles</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            excepturi minus aperiam deleniti facilis voluptates quo velit?
            Eligendi, consectetur consequatur?
          </p>
          <div className={classes.btnContainer}>
            <button className={[classes.btn, classes.heroBtn].join(" ")}>
              Get Started
            </button>
            <button
              className={[classes.btn, classes.flat, classes.heroBtn].join(" ")}
            >
              Shop Accessories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
