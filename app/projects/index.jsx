"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import VideoSlider from "@/components/videoslider/VideoSlider";
import Image from "next/image";
import svgArrow from "../../public/images/icons/svg/arrows-slider.svg";

export default function Projects() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoUrls = [
    "https://www.youtube.com/watch?v=SarOJwIz4Zg",
    "https://www.youtube.com/watch?v=AzBBrWqOD5M",
    "https://www.youtube.com/watch?v=OiAgd3CeBs8",
    "https://www.youtube.com/watch?v=ySjWjpCELqU",
    "https://www.youtube.com/watch?v=egOmX4quvrs",
    "https://www.youtube.com/watch?v=UyQ5NNIPTjI",
    "https://www.youtube.com/watch?v=5RrIOV-64JA",
    "https://www.youtube.com/watch?v=c9Jv7JfCMwU",
    "https://www.youtube.com/watch?v=PNv9uSfj5WY",
    "https://www.youtube.com/watch?v=ozP1O7vRgWU",
    "https://www.youtube.com/watch?v=NIVbDaDtWgM",
    "https://www.youtube.com/watch?v=SefyJto2dLk",
    "https://www.youtube.com/watch?v=v7p54UqFe40",
    "https://www.youtube.com/watch?v=DlNxZ9iS1qg",
    "https://www.youtube.com/watch?v=lBNhSU5kiqw",
    "https://www.youtube.com/watch?v=D3wWQ65Vl5M",
    "https://www.youtube.com/watch?v=Khdl9rN7eSU",
    "https://www.youtube.com/watch?v=Vz9e7R0kRG8",
    "https://www.youtube.com/watch?v=foNTbBXoaY8",
  ];
  const videos = videoUrls.map((url) => ({
    id: url.split("v=")[1],
    title: getVideoTitleFromUrl(url),
  }));
  function getVideoTitleFromUrl(url) {
    // Extract the video ID from the URL
    const videoId = url.split("v=")[1];

    // You can fetch the video title from YouTube's API if you have it
    // or you can manually set titles if you know them

    // Map video IDs to corresponding titles (you can add more titles as needed)
    const videoTitles = {
      SarOJwIz4Zg: "Mocro Maffia seizoen 1",
      AzBBrWqOD5M: "Mocro Maffia seizoen 2",
      OiAgd3CeBs8: "Mocro Maffia seizoen 3",
      ySjWjpCELqU: "Mocro Maffia seizoen 4",
      egOmX4quvrs: "ŠKODA Zaterdagfamilies",
      UyQ5NNIPTjI: "ABN AMRO Dark side of money",
      "5RrIOV-64JA": "Ik ben gehackt",
      c9Jv7JfCMwU: "En nu ben ik verliefd",
      PNv9uSfj5WY: "Sea Shepherd",
      ozP1O7vRgWU: "Cero Ismael",
      NIVbDaDtWgM: "Ballontastic",
      SefyJto2dLk: "ABN AMRO Familie erfenis",
      v7p54UqFe40: "Khalini",
      DlNxZ9iS1qg: "De regels van Floor",
      lBNhSU5kiqw: "Samsung",
      D3wWQ65Vl5M: "Yubo",
      Khdl9rN7eSU: "Flexe gasten",
      Vz9e7R0kRG8: "De beste granola koop je niet in de winkel - commercial",
      foNTbBXoaY8: "ANNE+",
    };

    // Return the title corresponding to the video ID
    return videoTitles[videoId] || "Unknown Title";
  }

  const nextVideo = () => setCurrentVideo((currentVideo + 1) % videos.length);
  const prevVideo = () =>
    setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);

  return (
    <main
      id="projects"
      className="projects relative mt-[2rem]
        w-full min-h-screen flex flex-col 
        items-center justify-center"
    >
      {/* Container Buttons Title & Player - Experimental */}
      <div
        className="
          lg:h-full lg:w-full 
          lg:flex lg:flex-col lg:items-center lg:justify-center"
      >
        {/* Container Title - Experimental */}
        <div
          className="flex justify-center text-light font-bold
          mb-7 text-[21px] text-center 
          xl:mb-6 xl:text-xl
          lg:mb-4 lg:text-lg lg:flex lg:flex-col lg:order-1
          md:text-[17px]
          xs:text-base"
        >
          {videos[currentVideo].title}
        </div>
        {/* Container Buttons Left & Right - Experimental */}
        <div
          className="lg:relative
            lg:w-full lg:max-w-[40vw] lg:mt-14 lg:order-3
            lg:flex lg:flex-col lg:items-center"
        >
          <div className="lg:m-0">
            <motion.button
              whileHover={{
                backgroundColor: "#555555",
                transition: { duration: 0.3 },
              }}
              className="absolute flex items-center justify-center
                w-[45px] h-[45px] top-1/2 -translate-y-1/2 p-[10px] left-[4rem]
                lg:flex lg:flex-col lg:top-0 lg:left-0  
                xs:w-[35px] xs:h-[35px] 

                rounded-full border-none outline-none no-underline
                bg-[#f8f0e5] cursor-pointer"
              onClick={prevVideo}
            >
              <Image
                src={svgArrow}
                alt="button previous video"
                className="absolute rotate-[180deg]
                    w-[30px]
                    xs:w-[25px]"
              />
            </motion.button>
          </div>
          <div className="lg:m-0">
            <motion.button
              whileHover={{
                backgroundColor: "#555555",
                transition: { duration: 0.2 },
              }}
              className="absolute flex items-center justify-center
                w-[45px] h-[45px] top-1/2 -translate-y-1/2 p-[10px] right-[4rem]
                lg:flex lg:flex-col lg:top-0 lg:right-0
                xs:w-[35px] xs:h-[35px] 

                rounded-full border-none outline-none no-underline
                bg-[#f8f0e5] cursor-pointer"
              onClick={nextVideo}
            >
              <Image
                src={svgArrow}
                alt="button next video"
                className="absolute 
                    w-[30px]
                    xs:w-[25px]"
              />
            </motion.button>
          </div>
        </div>
        {/* Container VideoSlider - Experimental */}
        <div className="lg:order-2">
          <VideoSlider video={videos[currentVideo]} />
        </div>
      </div>
    </main>
  );
}
