"use client"
import { motion } from "framer-motion";

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
    // className="absolute"
  >
    <iframe
      className="videoPlayer relative mt-0
          w-[60vw] max-w-[800px] h-[33.75vw] max-h-[450px]
          xs:w-[80vw] xs:h-[53.75vw]
          border-solid border-light border-[2px] rounded-[10px]"
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
