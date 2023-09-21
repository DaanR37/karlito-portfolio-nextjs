"use client"
// import React from 'react';
import { useState } from 'react';
import VideoSlider from '@/_components/videoslider/VideoSlider';

export default function Page() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoUrls = [
    'https://www.youtube.com/watch?v=SarOJwIz4Zg',
    'https://www.youtube.com/watch?v=AzBBrWqOD5M',
    'https://www.youtube.com/watch?v=OiAgd3CeBs8',
    'https://www.youtube.com/watch?v=ySjWjpCELqU',
    'https://www.youtube.com/watch?v=egOmX4quvrs'
  ];

  const videos = videoUrls.map(url => ({
    id: url.split('v=')[1],
    title: 'Video Title' // Replace with actual video titles
  }));

  const nextVideo = () => setCurrentVideo((currentVideo + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);

  return (
    <main id="projects" className="relative w-full h-[100vh]">
      <button onClick={prevVideo}>Previous</button>
      <button onClick={nextVideo}>Next</button>
      <VideoSlider video={videos[currentVideo]} />
    </main>
  )
};
