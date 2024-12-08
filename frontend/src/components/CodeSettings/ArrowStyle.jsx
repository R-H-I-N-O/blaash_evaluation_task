import { FaChevronDown, FaChevronRight, FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";

const ArrowStyle = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-4 bg-[#26272f] p-4 rounded-lg h-full">
      <button
        className="text-lg font-semibold text-white bg-[#323338] flex justify-between w-full items-center p-2 rounded-xl"
        onClick={() => setVisible(!visible)}
      >
        Arrow Style <FaChevronDown />
      </button>
      {/* Choose Arrow Style */}
      <div className={`flex flex-col gap-4 ${visible ? "block" : "hidden"}`}>
        <div className="space-y-2">
          <label className="text-sm font-medium">Choose Arrow Style</label>
          <div className="flex gap-2">
            <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
              <div className="rounded-md bg-[#f4f4f4] text-black p-1">
                <FaChevronRight />
              </div>
            </button>
            <button className="text-sm rounded-lg border border-blue-600 bg-gray-700 p-3 flex items-center justify-center">
              <div className="rounded-md bg-[#f4f4f4] text-black p-1">
                <FaArrowRight />
              </div>
            </button>
            <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
              <div className="rounded-full bg-[#f4f4f4] text-black p-1">
                <FaChevronRight />
              </div>
            </button>
            <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
              <div className="rounded-full bg-[#f4f4f4] text-black p-1">
                <FaArrowRight />
              </div>
            </button>
            <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
              <div>
                <FaArrowRight />
              </div>
            </button>
            <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
              <div>
                <FaChevronRight />
              </div>
            </button>
          </div>
        </div>
        {/* Position */}
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-medium">Position</label>
            <div className="rounded-lg border border-gray-600 flex justify-between">
              <select className="bg-[#26272f] text-white mx-1 w-full border-none outline-none">
                <option>Outside the Slider</option>
              </select>
            </div>
          </div>
        </div>

        {/* Arrow Color */}
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-medium">Arrow Color</label>
            <div className="rounded-lg border border-gray-600 flex justify-between p-1 items-center">
              <input
                type="text"
                value={"#ffffff"}
                className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
              />
              <span>
                <input
                  type="color"
                  value={"#ffffff"}
                  className="w-8 h-8 p-0 rounded outline-none appearance-none bg-transparent"
                />
              </span>
            </div>
          </div>
        </div>

        {/* Background and Opacity */}
        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Border Color</label>
            <div className="rounded-lg border border-gray-600 flex justify-between p-1 items-center">
              <input
                type="text"
                value={"#00000"}
                className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
              />
              <span>
                <input
                  type="color"
                  value={"#000000"}
                  className="w-8 h-8 p-0 rounded outline-none appearance-none bg-transparent"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Opacity</label>
            <div className="rounded-lg border border-gray-600 flex justify-between p-1">
              <input
                type="number"
                value={80}
                className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
              />
              <span className="text-sm rounded-lg border border-gray-600 p-2">
                %
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-medium">Navigation Dots</label>
            <div className="flex gap-2 p-1 h-full items-center">
              <input
                type="radio"
                checked={true}
                className="w-5 h-5 rounded-md"
              />
              <span className="text-sm">Show Navigation Dots</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowStyle;
