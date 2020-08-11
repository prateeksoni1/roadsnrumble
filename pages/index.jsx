import React from "react";
import classes from "./index.module.scss";
import BackgroundSlider from "react-background-slider";

const IndexPage = () => {
  return (
    <>
      <BackgroundSlider
        duration={10}
        transition={2}
        images={[
          require("../assets/images/hero/bg1.jpg"),
          require("../assets/images/hero/bg2.jpg"),
          require("../assets/images/hero/bg3.jpg"),
        ]}
      />
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
                className={[classes.btn, classes.flat, classes.heroBtn].join(
                  " "
                )}
              >
                Shop Accessories
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
