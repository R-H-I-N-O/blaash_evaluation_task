import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const PlayButtonStyle = () => {
  const styles = [
    { type: "Single", icon: "/buttonStyleSingle.png" },
    { type: "Carousel Portrait", icon: "/buttonStyleCarousel.png" },
    { type: "Carousel Landscape", icon: "/buttonStyleCarouselLandcsape.png" },
    { type: "Gallery Grid", icon: "/buttonStyleGrid.png" },
    { type: "Story", icon: "/buttonStyleStory.png" },
  ];
  const [visible, setVisible] = useState(false)
  const [playButtonStyle, setPlayButtonStyle] = useState("Carousel Portrait");

  return (
    <div className="space-y-4 bg-[#26272f] p-4 rounded-lg">
      <button className="text-lg font-semibold text-white bg-[#323338] flex justify-between w-full items-center p-2 rounded-xl"
      onClick={()=>setVisible(!visible)}
      >
        Play Button Style
        <FaChevronDown />
      </button>
      <div className={`flex flex-col gap-4 ${visible?"block":"hidden"}`}>
      {styles.map((style) => (
        <button
          key={style.type}
          className={`w-full p-2 rounded-lg text-left flex items-center space-x-4 border transition-colors duration-200 ${
            playButtonStyle?.type === style.type
              ? "border-gray-700 bg-[#202126]"
              : "border-gray-700"
          }`}
          onClick={() => setPlayButtonStyle(style)}
        >
          <img src={style.icon} alt={style.type} className="w-16 h-14" />
          <span className="text-white">{style.type}</span>
        </button>
      ))}
      </div>
    </div>
  );
};

export default PlayButtonStyle;
