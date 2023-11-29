import React from "react";
import { easeIn, motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };

function ProductDetails() {
  return (
    <>
      <div className="showcase">
        <motion.div className="product">
          <div className="product-gallery">
            <div className="img-background"></div>
            <motion.div
              className="img-surround-1"
              initial={{ y: "-50%", right: 0, x: "-40%", scale: 1 }}
              animate={{
                y: "-50%",
                right: "100%",
                x: "100%",
                scale: 1.2,
                transition: { ...transition, duration: 0.8 },
              }}
            >
              <Link to="/">
                <img src="/c.png" />
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="product-details-1"
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { ...transition, duration: 0.8 } }}
          >
            <div className="details-header">PRODUCT DETAILS</div>
            <h1 className="product-name-1">Hrafn Bomber Jacket</h1>
            <motion.div
              className="properties-section"
              tabIndex="1"
              tabIndex="1"
            >
              <h2 className="properties-header">Outer Material</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Filling Material</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Water Repellent</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Pocket</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Filling Material</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Water Repellent</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Pocket</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Filling Material</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Water Repellent</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <motion.div className="properties-section" tabIndex="1">
              <h2 className="properties-header">Pocket</h2>
              <div className="property-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at neque lobortis tortor commodo tempor eget at elit.
              </div>
            </motion.div>
            <button className="button-1">PLACE ORDER</button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ProductDetails;
