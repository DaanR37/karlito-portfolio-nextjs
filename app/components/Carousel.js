"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Carousel({ images, interval }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-[100vw] h-[110vh]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/images${image}`}
          alt="Image Rotator"
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
  );
};