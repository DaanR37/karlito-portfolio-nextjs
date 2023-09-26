"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import LogoKarlito from "../../public/images/logos/karlitos-way-locations.webp";

const images = [
  "/homepageCarousel/bowling.jpg",
  "/homepageCarousel/bathroom.jpg",
  "/homepageCarousel/diner.jpg",
  "/homepageCarousel/bedroom.jpg",
  "/homepageCarousel/poolhall.jpg",
  "/homepageCarousel/church.jpg",
  "/homepageCarousel/restaurant.jpg",
  "/homepageCarousel/longhall.jpg",
  "/homepageCarousel/stairs.jpg",
  "/homepageCarousel/mirror.jpg",
];

export default function HomePage() {
  return (
    <main id="home" className="relative w-[100vw] h-[110vh]">
      <div className="h-full w-full">
        <Carousel images={images} interval={3000} />

        {/* Logo Karlito's Way Location Homepage */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="absolute flex mx-auto
              w-[1100px] h-[450px]
              xl:w-[750px] xl:h-[435px]
              lg:w-[700px] lg:h-[375px]
              md:w-[650px] md:h-[325px]
              xs:w-[550px] xs:h-[225px]
              top-[45%] -translate-y-[45%]
              left-1/2 -translate-x-1/2"
        >
          <Image
            src={LogoKarlito}
            alt="Logo Karlitos Way"
            priority={true}
            rel="preload"
            as="image"
            sizes="
            (max-width: 768px) 100vw,
            (max-width: 1535px) 50vw,
            50vw"
            fill
            style={{
              objectFit: "cover",
              width: "100%",
            }}
            data-scroll
            data-scroll-speed="0.4"
            className=""
          />
        </motion.div>
      </div>
    </main>
  );
}

const Carousel = ({ images, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="h-full w-full">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/images${image}`}
          alt=""
          width={900}
          height={900}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 1s",
            opacity: index === activeIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};
