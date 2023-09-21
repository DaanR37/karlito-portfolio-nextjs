// import SwiperCore, { Navigation, Pagination } from 'swiper/core';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import YouTube from 'react-youtube';
// import styles from "./videoslider.module.scss";

// // Import Swiper styles
// import 'swiper/swiper-bundle.min.css';
// SwiperCore.use([Navigation, Pagination]);


// const videos = [
//   'http://www.youtube.com/watch?v=egOmX4quvrs',
//   'http://www.youtube.com/watch?v=ySjWjpCELqU',
//   'http://www.youtube.com/watch?v=OiAgd3CeBs8',
//   'http://www.youtube.com/watch?v=AzBBrWqOD5M',
//   'http://www.youtube.com/watch?v=SarOJwIz4Zg',
// ];

// const VideoSlider = () => {
//   const opts = {
//     height: '360',
//     width: '640',
//   };

//   return (
//     <Swiper
//       navigation
//       pagination
//       spaceBetween={20}
//       slidesPerView={1}
//     >
//       {videos.map((videoUrl, index) => {
//         const videoId = videoUrl.split('v=')[1]; // Extract video ID from URL
//         return (
//           <SwiperSlide key={videoUrl}>
//             <div className={`${styles.videoContainer}`}>
//               <YouTube videoId={videoId} opts={opts} />
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default VideoSlider;
