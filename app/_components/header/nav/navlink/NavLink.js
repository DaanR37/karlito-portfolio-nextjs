import styles from "./navlink.module.scss";
// import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from "../../anim";
import LocomotiveScroll from "locomotive-scroll";


export default function NavLink({ data, isActive, setSelectedIndicator, closeMenu }) {

  const { title, href, index } = data;

  // Add a new `onClick` handler to close the menu when the user clicks on a link.
  const handleClick = () => {
    // Close the menu by calling the closeMenu callback
    closeMenu();

    // Scroll to the appropriate section
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
    });

    // Check if the href is an anchor link (starts with "#")
    if (href.startsWith("#")) {
      // Scroll to the section with the corresponding ID
      scroll.scrollTo(href);
    } else {
      // If it's a regular link, navigate to the respective page
      window.location.href = href;
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
}
