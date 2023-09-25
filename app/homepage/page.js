"use client"
import Carousel from '../components/Carousel';
import ImageComp from "../components/ImageComp";

const images = [
  "/homepageCarousel/bowling.jpg",
  "/homepageCarousel/diner.jpg",
  "/homepageCarousel/poolhall.jpg",
  "/homepageCarousel/restaurant.jpg",
  "/homepageCarousel/stairs.jpg",
];

export default function Page() {
  return (
    <main id='home' className='relative'>
      <div className='absolute z-10
        left-1/2 top-[45%] 
        -translate-x-1/2 -translate-y-[45%]'
      >
        <ImageComp />
      </div>
      <Carousel images={images} interval={5000} />
    </main>
  )
};