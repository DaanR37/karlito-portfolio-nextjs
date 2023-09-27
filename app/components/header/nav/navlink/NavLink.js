// "use client"
import { motion } from 'framer-motion';
import { slide, scale } from "../../anim";
import LocomotiveScroll from "locomotive-scroll";
import { poppins, open_sans, roboto_flex, roboto, poiret_one } from '@/fonts';


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
    <motion.div
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="link relative flex items-center"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="indicator absolute 
          w-[7px] h-[7px] -left-[30px]
          bg-light rounded-full"
      >
      </motion.div>
      <a
        href={href}
        onClick={handleClick}
        className={`${open_sans.className} text-light font-light`}
      >
        {title}
      </a>
    </motion.div>
  )
};
