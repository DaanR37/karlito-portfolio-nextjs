"use client"
import { motion } from "framer-motion";
import styles from "../../projects/page.module.scss";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: { opacity: 0 }
};

const VideoSlider = ({ video }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="show"
    exit="exit"
  >
    <iframe
      className={`${styles.videoPlayer}`}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${video.id}`}
      title={video.title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </motion.div>
);

export default VideoSlider;
