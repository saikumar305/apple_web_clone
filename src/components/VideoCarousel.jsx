import { useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVIdeo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPalying: false,
  });

  return (
    <div className="flex items-center">
      {hightlightsSlides.map((list, i) => {
        <div id="slider" className="sm:pr-20 pr-10">
          <div className="video-carousel-container">
            <div className="w-full h-full flex-center rounder-3xl overflow-hidden bg-black">
              <video id="video" playsInline={true} preload="auto" muted>
                <source src={list.video} type="video/mp4" />
              </video>
              <div className="absolute top-12 lef-[5%] z-10 ">
                {list.textLists.map((text) => {
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>;
                })}
              </div>
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default VideoCarousel;
