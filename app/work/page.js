import VideoSlider from "../_components/videoslider/VideoSlider";

const videos = [
  'https://www.youtube.com/watch?v=egOmX4quvrs',
  'https://www.youtube.com/watch?v=ySjWjpCELqU',
  'https://www.youtube.com/watch?v=OiAgd3CeBs8',
  'https://www.youtube.com/watch?v=AzBBrWqOD5M',
  'https://www.youtube.com/watch?v=SarOJwIz4Zg',
];

export default function Page() {
  return (
    <main id='work' className='work relative w-full h-[100vh] bg-transparent'>
      <VideoSlider videos={videos} />
    </main>
  );
}
