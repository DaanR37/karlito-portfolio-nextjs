"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import ImageComp from "./ImageComp";

export default function Carousel({ images, interval }) {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-[100vw] h-[110vh]">
      <div className='absolute z-10
        left-1/2 top-[45%] 
        -translate-x-1/2 -translate-y-[45%]'
      >
        <ImageComp />
      </div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/images${image}`}
          alt=""
          width={800}
          height={800}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 1s',
            opacity: index === activeIndex ? 1 : 0,
          }}
        />
      ))}
    </div>


    // <div className="carousel relative rounded-[10px] h-[400px] max-w-[650px] mx-auto overflow-hidden">
    //   <Image
    //     key={currentIndex}
    //     src={`/images${images[currentIndex]}`}
    //     alt="carousel image"
    //     width={300}
    //     height={300}
    //     className="w-[99%] h-[99%] rounded-[8px]"
    //   />
    //   <div className="slide_direction flex justify-between">
    //     <div className="left absolute h-[25px] w-[25px] bg-dark text-light py-2 px-2 mt-0 mb-[20px] 
    //     top-0 bottom-0 mx-auto my-[10px] left-0"
    //       onClick={handlePrevious}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         height="20"
    //         viewBox="0 96 960 960"
    //         width="20"
    //       >
    //         <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
    //       </svg>
    //     </div>
    //     <div className="right absolute h-[25px] w-[25px] bg-dark text-light py-2 px-2 mt-0 mb-[20px] 
    //     top-0 bottom-0 mx-auto my-[10px] right-0"
    //       onClick={handleNext}>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         height="20"
    //         viewBox="0 96 960 960"
    //         width="20"
    //       >
    //         <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
    //       </svg>
    //     </div>
    //   </div>
    //   <div className="indicator flex mt-[20px] justify-center gap-[20px]">
    //     {images.map((_, index) => (
    //       <div
    //         key={index}
    //         className={`dot ${currentIndex === index ? "active" : ""}
    //         w-[15px] h-[15px] rounded-[50%] bg-[whitesmoke]`}
    //         onClick={() => handleDotClick(index)}
    //       ></div>
    //     ))}
    //   </div>
    // </div>
  );
};