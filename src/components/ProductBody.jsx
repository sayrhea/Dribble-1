import React from "react";
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };

const letterVariants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: 0.9 },
  },
  exit: { y: 40, opacity: 0, transition: { ...transition, duration: 0.6 } },
};
// const fadingVariants = {
//   initial: { opacity: 0 },
//   animate: {
//     opacity: 1,
//     transition: { duration: 0.6, delay: 1, ...transition },
//   },
// };

function ProductBody() {
  return (
    <>
      <motion.header className="site-header">
        <motion.div className="site-header-brand">
          <motion.span>CT</motion.span>
        </motion.div>
        <h3 className="site-header-company-name">CITRUM</h3>
      </motion.header>
      <motion.div className="showcase">
        <div className="product">
          <motion.div
            className="product-details"
            exit={{
              width: 0,
              transition: { delay: 0.5, duration: 0.5, ease: easeIn },
            }}
          >
            <div className="left-section">
              <motion.div
                className="product-brand-name"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.6, delay: 1.2, ...transition },
                }}
                exit={{
                  opacity: 0,
                  transition: transition,
                }}
              >
                KARLAR & KONUR
              </motion.div>
              <div className="product-name">
                <div>
                  <motion.h1
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    Hrafn
                  </motion.h1>
                </div>
                <div>
                  <motion.h1
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
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
                exit="exit"
              >
                34,990
              </motion.h1>
              <motion.div
                className="product-description"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.6, delay: 1.2, ...transition },
                }}
                exit={{
                  opacity: 0,
                  transition: transition,
                }}
              >
                A new version of the classic bomber jacket for both the sexes in
                warm and extremely lightweight. Insulated with PrimaLoft.
              </motion.div>
              <motion.button
                className="button"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.6, delay: 1.2, ...transition },
                }}
                exit={{
                  opacity: 0,
                  transition: transition,
                }}
              >
                PLACE ORDER
              </motion.button>
            </div>
          </motion.div>
          <div className="product-gallery">
            <motion.div
              className="img-background"
              initial={{ x: 1000 }}
              animate={{ x: 0, transition: transition }}
            ></motion.div>
            <motion.div
              className="img-surround"
              initial={{ right: "50%", x: "50%", top: "50%", y: "-50%" }}
              exit={{
                transition: { ...transition, delay: 1 },
              }}
            >
              <Link to="/hrafn-bomber-jacket">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.6, delay: 1.2, ...transition },
                  }}
                  src="/c.png"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProductBody;
