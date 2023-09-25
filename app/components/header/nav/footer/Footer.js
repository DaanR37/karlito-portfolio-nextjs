import styles from "./footer.module.scss";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <motion.a
        href="https://www.linkedin.com/in/karlein-nolet-451566a/"
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`${styles.hoverUnderlineAnimation} ${styles.textShadow}`}
      >
        LinkedIn
      </motion.a>
      <motion.a
        href="https://www.instagram.com/karlein/"
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`${styles.hoverUnderlineAnimation} ${styles.textShadow}`}
      >
        Instagram
      </motion.a>
      <motion.a
        href="https://www.facebook.com/karlein.nolet"
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
        className={`${styles.hoverUnderlineAnimation} ${styles.textShadow}`}
      >
        Facebook
      </motion.a>
    </div>
  )
}
