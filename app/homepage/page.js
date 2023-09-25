// "use client"
import Carousel from '../components/Carousel';
import { motion } from 'framer-motion';
import LogoKarlito from "../../public/images/logos/karlitos-way-locations.webp";
import Image from 'next/image';

const images = [
  "/homepageCarousel/bowling.jpg",
  "/homepageCarousel/diner.jpg",
  "/homepageCarousel/poolhall.jpg",
  "/homepageCarousel/restaurant.jpg",
  "/homepageCarousel/stairs.jpg",
];

export default function Page() {
  return (
    <main id="home" className='relative w-full h-[110vh]'>
      <div className='relative w-full h-full'>
        <div className='absolute'>
          <Carousel images={images} interval={5000} />
        </div>
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
          className="absolute mx-auto
            w-[1100px] h-[450px]
            left-1/2 top-[45%] 
            -translate-x-1/2 -translate-y-[45%] z-10"
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
            className="relative"
          />
        </motion.div>
      </div>
    </main>
  )
};