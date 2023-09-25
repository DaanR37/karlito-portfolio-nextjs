// "use client"
import Carousel from '../_components/Carousel';
// import Image from "next/image";
// import ImageComp from "../_components/ImageComp";
// import { useEffect, useState } from "react";


const images = [
  "/homepageCarousel/bowling.jpg",
  "/homepageCarousel/diner.jpg",
  "/homepageCarousel/poolhall.jpg",
  "/homepageCarousel/restaurant.jpg",
  "/homepageCarousel/stairs.jpg",
]


export default function Page() {
  return (
    <main id='home'>
      <Carousel images={images} interval={5000} />
    </main>
  )
};

// const Carousel = ({ images, interval }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((current) => (current + 1) % images.length);
//     }, interval);

//     return () => clearInterval(timer);
//   }, [images, interval]);

//   return (
//     <main id='home' className="relative w-[100vw] h-[110vh]">
//       <div className='absolute z-10
//         left-1/2 top-[45%] 
//         -translate-x-1/2 -translate-y-[45%]'
//       >
//         <ImageComp />
//       </div>
//       {images.map((image, index) => (
//         <Image
//           key={index}
//           src={`/images${image}`}
//           alt=""
//           width={800}
//           height={800}
//           style={{
//             position: 'absolute',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             transition: 'opacity 1s',
//             opacity: index === activeIndex ? 1 : 0,
//           }}
//         />
//       ))}
//     </main>
//   );
// };
