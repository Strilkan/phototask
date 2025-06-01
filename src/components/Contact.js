import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { PhoneIcon, Mail } from "lucide-react";
import "./css/contact.css";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="contact-title">Kontakt:</h2>
      <div className="contact-details">
        <div className="contact-item">
          <Mail className="icon" />
          <a href="mailto:majkiphotography@gmail.com" className="link">
            majkiphotography@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaInstagram className="icon" />
          <a
            href="https://www.instagram.com/majki_photography?igsh=ZXNtbzN6aTdidHZv"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            @majkiphotography
          </a>
        </div>
        <div className="contact-item">
          <FaFacebookF className="icon" />
          <a
            href="https://www.facebook.com/share/19F6Qyz7oK/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Majki Photography
          </a>
        </div>
        <div className="contact-item">
          <PhoneIcon className="icon" />
          <a href="tel:+385997870871" className="link">
            +385 99 787 0871
          </a>
        </div>
      </div>
    </motion.div>
  );
}
