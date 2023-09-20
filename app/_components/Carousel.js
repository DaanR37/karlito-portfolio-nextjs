"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const MyMotionImage = motion(Image);

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel relative rounded-[10px] h-[400px] max-w-[650px] mx-auto overflow-hidden">
      <AnimatePresence>
        <MyMotionImage
          key={currentIndex}
          src={`/images${images[currentIndex]}`}
          alt="carousel image"
          width={300}
          height={300}
          className="w-[99%] h-[99%] rounded-[8px]"
        />
      </AnimatePresence>
      <div className="slide_direction flex justify-between">
        <div className="left absolute h-[25px] w-[25px] bg-dark text-light py-2 px-2 mt-0 mb-[20px] 
        top-0 bottom-0 mx-auto my-[10px] left-0"
          onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right absolute h-[25px] w-[25px] bg-dark text-light py-2 px-2 mt-0 mb-[20px] 
        top-0 bottom-0 mx-auto my-[10px] right-0"
          onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>
      <div className="indicator flex mt-[20px] justify-center gap-[20px]">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}
            w-[15px] h-[15px] rounded-[50%] bg-[whitesmoke]`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;