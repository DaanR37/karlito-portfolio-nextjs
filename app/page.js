"use client"
import React from 'react';
import Carousel from './_components/Carousel';

const images = [
  "/bowling.jpg",
  "/diner.jpg",
  "/poolhall.jpg",
  "/restaurant.jpg",
  "/stairs.jpg",
]

export default function Home() {
  return (
    <div className="App">
      <main>
        <Carousel images={images} interval={5000} />
      </main>
    </div>
  )
}
