import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import PropTypes from "prop-types";

function RevealText({ overflow, children }) {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);
  return (
    <div ref={ref} className={overflow === 1 ? "reavealTextBis" : "reavealText"}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.75, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.75, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#89416e",
          zIndex: 20,
        }}
      />
    </div>
  );
}
RevealText.propTypes = {
  children: PropTypes.func.isRequired,
  overflow: PropTypes.func.isRequired,
};
export default RevealText;
