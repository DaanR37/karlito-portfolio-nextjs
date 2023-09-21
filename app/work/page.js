// pages/work.js
import VideoSlider from "@/_components/videoslider/VideoSlider";


/* Change to HTTPS:// before deploying */
const videos = [
  'http://www.youtube.com/watch?v=egOmX4quvrs',
  'http://www.youtube.com/watch?v=ySjWjpCELqU',
  'http://www.youtube.com/watch?v=OiAgd3CeBs8',
  'http://www.youtube.com/watch?v=AzBBrWqOD5M',
  'http://www.youtube.com/watch?v=SarOJwIz4Zg',
];

export default function Page() {
  return (
    <main id='work' className='work relative w-full h-[100vh] bg-transparent'>
      <VideoSlider videos={videos} />
    </main>
  );
}
