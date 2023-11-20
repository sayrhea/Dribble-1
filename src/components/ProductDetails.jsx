import React from "react";
import { easeIn, motion } from "framer-motion";

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };

function ProductDetails() {
  return (
    <div className="body-2">
      <div className="main-2">
        <motion.div
          className="jacket-2"
          initial={{ x: 500 }}
          animate={{
            x: 0,
            transition: { ...transition, duration: 2 },
          }}
        >
          <motion.img animate={{ scale: 1.2 }} src="/c.png" />
        </motion.div>
        <motion.div
          className="details-2"
          initial={{ x: 300 }}
          animate={{
            x: 0,
            transition: { delay: 0.5, duration: 1.6, ease: easeIn },
          }}
        >
          <div className="product-details">PRODUCT DETAILS</div>
          <motion.div className="product-name">Hrafn Bomber Jacket</motion.div>
          <h2 className="properties-header">Outer Material</h2>
          <div className="property-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            neque lobortis tortor commodo tempor eget at elit.
          </div>
          <h2 className="properties-header">Filling Material</h2>
          <div className="property-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            neque lobortis tortor commodo tempor eget at elit.
          </div>

          <h2 className="properties-header">Water Repellent</h2>
          <div className="property-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            neque lobortis tortor commodo tempor eget at elit.
          </div>
          <h2 className="properties-header">Pocket</h2>
          <div className="property-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            neque lobortis tortor commodo tempor eget at elit.
          </div>
          <button className="button-24">PLACE ORDER</button>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductDetails;
