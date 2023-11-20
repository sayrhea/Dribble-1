import React from "react";
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    <motion.div className="body-1">
      <div className="header">
        <div>
          <motion.div
            className="brand"
            exit={{ opacity: 0, transition: transition }}
          >
            <motion.span className="logo" whileHover={{ scale: 1.1 }}>
              CT
            </motion.span>
            <h3 className="company-name">CITRUM</h3>
          </motion.div>
        </div>
      </div>
      <div className="productPage-1">
        <div className="main-1">
          <motion.div
            className="details-1"
            exit={{ y: 600, transition: transition }}
          >
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
            // exit={{ x: -600, transition: { duration: 1 } }}
            className="jacket"
            key="jacket"
          >
            <Link to="/jacket1">
              <motion.img
                src="/c.png"
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.8, ...transition },
                }}
                // exit={{ scale: 1.2, transition: transition, x: 102 }}
              ></motion.img>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductBody;
