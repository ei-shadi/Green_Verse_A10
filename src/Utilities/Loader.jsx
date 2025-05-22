
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import "./Loader.css";

const animationVariants = {
  animate: {
    scale: [1, 1.3, 1],
    color: ["#4caf50", "#81c784", "#4caf50"],  // green pulses
    boxShadow: [
      "0 0 10px #4caf50",
      "0 0 30px #81c784",
      "0 0 10px #4caf50",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <motion.div
        className="leaf-container"
        variants={animationVariants}
        animate="animate"
      >
        <FaLeaf className="leaf-icon" />
      </motion.div>
      <p className="loader-text">Growing your gardening community...</p>
    </div>
  );
};

export default Loader;
