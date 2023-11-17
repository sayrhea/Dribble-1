import React from "react";
import { easeIn, easeInOut, motion } from "framer-motion";

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };

const letterVariants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition,
  },
};

function ProductBody() {
  return (
    <div className="app">
      <div className="header">
        <div>
          <div className="brand">
            <motion.span className="logo" whileHover={{ scale: 1.1 }}>
              CT
            </motion.span>
            <h3 className="company-name">CITRUM</h3>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="main">
          <motion.div className="details">
            <div className="brand-name">KARLAR & KONUR</div>
            <div className="product-name">
              <div>
                <motion.h1
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                >
                  Hrafn
                </motion.h1>
              </div>
              <div>
                <motion.h1
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                >
                  Bomber Jacket
                </motion.h1>
              </div>
            </div>
            <motion.h1
              className="product-price"
              variants={letterVariants}
              initial="initial"
              animate="animate"
            >
              34,990
            </motion.h1>
            <motion.div
              className="product-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              A new version of the classic bomber jacket for both the sexes in
              warm and extremely lightweight. Insulated with PrimaLoft.
            </motion.div>
            <button className="button-24">PLACE ORDER</button>
          </motion.div>
          <motion.div
            initial={{ x: 900 }}
            animate={{
              x: 0,
              transition: transition,
            }}
            className="jacket"
          >
            <motion.img
              src="/c.png"
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, ...transition },
              }}
            ></motion.img>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProductBody;
