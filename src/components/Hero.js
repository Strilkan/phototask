import { motion } from "framer-motion";
import "./css/hero.css";

export default function Hero() {
  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="hero-title">Majki Photography</h1>
      <p className="hero-subtitle">Ne propustite važne trenutke u životu...</p>
    </motion.div>
  );
}
