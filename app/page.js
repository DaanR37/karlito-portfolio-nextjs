"use client"
import React from 'react';
import Carousel from './_components/Carousel';

const images = [
  "/bowling.webp",
  "/diner.webp",
  "/poolhall.webp",
  "/restaurant.webp",
  "/stairs.webp",
]

export default function Home() {
  return (
    <div className="App">
      <main>
        <Carousel images={images} />
      </main>
    </div>
  )
}
