// Loader.jsx
import { motion } from "framer-motion";
import "./css/loader.css";

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 2 }}
    >
      <motion.img
        src="/images/majki-logo.jpg"
        alt="Majki Photography"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="loader-image"
      />
      <div className="loader-text">
        <h2>Stvarajmo vječne uspomene...</h2>
      </div>
    </motion.div>
  );
};

export default Loader;
