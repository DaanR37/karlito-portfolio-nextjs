"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import VideoSlider from '@/components/videoslider/VideoSlider';
import styles from "./page.module.scss";
import Image from 'next/image';
import svgArrow from "../../public/images/icons/svg/arrows-slider.svg";

export default function Projects() {
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
    title: getVideoTitleFromUrl(url)
  }));
  function getVideoTitleFromUrl(url) {
    // Extract the video ID from the URL
    const videoId = url.split('v=')[1];

    // You can fetch the video title from YouTube's API if you have it
    // or you can manually set titles if you know them

    // Map video IDs to corresponding titles (you can add more titles as needed)
    const videoTitles = {
      'SarOJwIz4Zg': 'Mocro Maffia seizoen 1',
      'AzBBrWqOD5M': 'Mocro Maffia seizoen 2',
      'OiAgd3CeBs8': 'Mocro Maffia seizoen 3',
      'ySjWjpCELqU': 'Mocro Maffia seizoen 4',
      'egOmX4quvrs': 'ŠKODA Zaterdagfamilies',
    };

    // Return the title corresponding to the video ID
    return videoTitles[videoId] || 'Unknown Title';
  }

  const nextVideo = () => setCurrentVideo((currentVideo + 1) % videos.length);
  const prevVideo = () => setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);


  return (
    <main id='projects' className={`${styles.projects}`}>
      <div className={styles.videoTitle}>
        {videos[currentVideo].title}
      </div>
      <motion.button
        whileHover={{ backgroundColor: '#555555', transition: { duration: 0.3 } }}
        className={`${styles.navButton} ${styles.prevButton}`}
        onClick={prevVideo}
      >
        <Image
          src={svgArrow}
          alt=''
          className='rotate-[180deg] invert'
        />
      </motion.button>
      <motion.button
        whileHover={{ backgroundColor: '#555555', transition: { duration: 0.2 } }}
        className={`${styles.navButton} ${styles.nextButton}`}
        onClick={nextVideo}
      >
        <Image
          src={svgArrow}
          alt=''
          className='invert'
        />
      </motion.button>
      <VideoSlider video={videos[currentVideo]} />
    </main>
  )
};
