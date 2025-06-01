import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./css/portfolio.css";

const categories = [
  "Krštenja",
  "Vjenčanja",
  "Djevojačke",
  "U prirodi",
  "Rođendana",
  "Newborn",
];

const categoryToPath = {
  Krštenja: "krstenja",
  Vjenčanja: "vjencanja",
  Djevojačke: "djevojacke",
  "U prirodi": "u-prirodi",
  Rođendana: "rodendani",
  Newborn: "newborn",
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Krštenja");

  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);
    return () =>
      document.removeEventListener("contextmenu", disableContextMenu);
  }, []);

  const renderImages = () => {
    const folder = categoryToPath[activeCategory];
    return Array.from({ length: 9 }).map((_, index) => (
      <motion.img
        key={index}
        src={`/images/portfolio/${folder}/photo${index + 1}.jpg`}
        alt={`${activeCategory} ${index + 1}`}
        className="portfolio-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    ));
  };

  return (
    <div className="portfolio-container">
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`category-button ${
              activeCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="image-grid">{renderImages()}</div>
    </div>
  );
}
