// "use client"
import styles from "./navlink.module.scss";
import { motion } from 'framer-motion';
import { slide, scale } from "../../anim";
import LocomotiveScroll from "locomotive-scroll";


export default function NavLink({ data, isActive, setSelectedIndicator, closeMenu }) {
  const { title, href, index } = data;

  const handleClick = () => {
    closeMenu(); // Close the menu by calling the closeMenu callback

    // Scroll to the appropriate section
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
    });

    // Check if the href is an anchor link (starts with "#")
    if (href.startsWith("#")) {
      scroll.scrollTo(href); // Scroll to the section with the corresponding ID
    } else {
      window.location.href = href; // If it's a regular link, navigate to the respective page
    }
  };

  return (
    <motion.div className={styles.link} onMouseEnter={() => { setSelectedIndicator(href) }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
      <a href={href} onClick={handleClick}>
        {title}
      </a>
    </motion.div>
  )
};
