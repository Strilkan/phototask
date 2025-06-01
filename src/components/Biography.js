import { motion } from "framer-motion";
import "./css/biography.css";

export default function Biography() {
  return (
    <motion.div
      className="biography-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="biography-heading">O meni ukratko...</h2>
      <div className="biography-text">
        <p>
          Bok, ja sam Maja – lice i srce iza Majki Photography. Već deset godina
          bilježim iskrene, spontane trenutke pune emocija i detalja.
          Fotografija mi je način da zaustavim vrijeme i sačuvam ono
          najvrijednije – uspomene koje se ne mogu ponoviti, ali mogu trajati
          zauvijek.
        </p>
        <p>
          Posebno volim fotografirati nježne bebe, sitne nožice i ručice,
          emotivna krštenja, djevojačke zabave, dječje rođendane i vjenčanja
          ispunjena ljubavlju. Svaki pogled, osmijeh i zagrljaj imaju svoju
          priču, a upravo fotografijama želim ispričati vašu priču – nježno,
          autentično i s puno emocija.
        </p>
        <p>Veselim se trenucima i uspomenama koje ćemo skupa stvoriti.</p>
      </div>

      <motion.img
        src="/images/majkich.jpg"
        alt="O meni"
        className="biography-image"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.div>
  );
}
