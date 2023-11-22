import React from "react";
import { easeIn, motion } from "framer-motion";

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };

function ProductDetails() {
  return (
    <>
      <div className="showcase">
        <div className="product">
          <div className="product-gallery">
            <div className="img-surround-1">
              <img src="/c.png" />
            </div>
            <div className="img-background"></div>
          </div>
          <div className="product-details">
            <div className="details-header">PRODUCT DETAILS</div>
            <h1 className="product-name-1">Hrafn Bomber Jacket</h1>
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
            <button className="button-1">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
