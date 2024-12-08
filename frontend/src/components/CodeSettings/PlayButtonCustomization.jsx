import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlinePlayCircle } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";

const PlayButtonCustomization = () => {
  const [visible, setVisible] = useState(false);
  const [iconStyleVisible, setIconStyleVisible] = useState(true);
  const [textStyleVisible, setTextStyleVisible] = useState(false);

  const changeIconStyleVisiblity = () => {
    setIconStyleVisible(true);
    setTextStyleVisible(false);
  };

  const changeTextStyleVisiblity = () => {
    setIconStyleVisible(false);
    setTextStyleVisible(true);
  };

  return (
    <div className="space-y-4 bg-[#26272f] p-4 rounded-lg h-full">
      <button
        className="text-lg font-semibold text-white bg-[#323338] flex justify-between w-full items-center p-2 rounded-xl"
        onClick={() => setVisible(!visible)}
      >
        Play Button Style
        <FaChevronDown />
      </button>
      <div className={`flex flex-col gap-4 ${visible ? "block" : "hidden"}`}>
        <div className="rounded-lg bg-gray-900">
          <button
            onClick={changeIconStyleVisiblity}
            className={`text-sm font-medium p-3 w-[50%] rounded-lg ${
              iconStyleVisible ? "border-b border-blue-400 bg-gray-700" : ""
            }`}
          >
            Play Icon Button
          </button>
          <button
            onClick={changeTextStyleVisiblity}
            className={`text-sm font-medium p-3 w-[50%] rounded-lg ${
              textStyleVisible ? "border-b border-blue-400 bg-gray-700" : ""
            }`}
          >
            Text Button
          </button>
        </div>
        <div className={`${iconStyleVisible ? "flex flex-col gap-4" : "hidden"}`}>
          <div className="space-y-2">
            <label className="text-sm font-medium">Choose Arrow Style</label>
            <div className="flex gap-4">
              <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
                <div className="text-lg">
                  <CiPlay1 />
                </div>
              </button>
              <button className="text-sm rounded-lg border border-blue-600 bg-gray-700 p-3 flex items-center justify-center">
                <div className="text-lg">
                  <FaPlay />
                </div>
              </button>
              <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
                <div className="text-lg">
                  <FaPlay />
                </div>
              </button>
              <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
                <div className="text-lg">
                  <IoMdPlayCircle />
                </div>
              </button>
              <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
                <div className="text-lg">
                  <MdOutlinePlayCircle />
                </div>
              </button>
              <button className="text-sm rounded-lg border border-gray-600 p-3 flex items-center justify-center">
                <div className="text-lg">
                  <FaPlay />
                </div>
              </button>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-3 w-full">
              <label className="text-sm font-medium">Position</label>
              <div className="rounded-lg border border-gray-600 flex justify-between p-1">
                <select className="bg-[#26272f] text-white ml-1 w-full border-none outline-none">
                  <option>Center</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <label className="text-sm font-medium">Animation</label>
              <div className="rounded-lg border border-gray-600 flex justify-between p-1">
                <select className="bg-[#26272f] text-white ml-1 w-full border-none outline-none">
                  <option>Shine</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Play Icon Color</label>
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
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">
                Play Icon Background
              </label>
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
          </div>
        </div>
        <div className={`${textStyleVisible ? "flex flex-col gap-4" : "hidden"}`}>
        <div className="flex gap-4 w-full justify-between">
        <button className="bg-blue-600 text-white rounded-full hover:bg-blue-700 px-3 flex gap-2 items-center py-2 text-[14px] font-semibold">
          Remote More
        </button>
        <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700 px-3 flex gap-2 items-center py-2 text-[14px] font-semibold">
          Remote More
        </button>
        <button className="bg-blue-600 text-white hover:bg-blue-700 px-2 flex gap-3 items-center py-2 border-b border-white text-[14px] font-semibold">
          Remote More
        </button>
        </div>
          <div className="flex w-full">
            <div className="flex flex-col gap-3 w-full">
              <label className="text-sm font-medium">Text</label>
              <div className="rounded-lg border border-gray-600 flex justify-between p-1 w-full">
                <input
                  type="text"
                  placeholder="Enter Text"
                  className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Text Size</label>
              <div className="rounded-lg border border-gray-600 flex justify-between p-1">
                <input
                  type="number"
                  value={2}
                  className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
                />
                <span className="text-sm rounded-lg border border-gray-600 p-2">
                  PX
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Text Color</label>
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
          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Button Color</label>
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
                  value={2}
                  className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
                />
                <span className="text-sm rounded-lg border border-gray-600 p-2">
                  %
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Border Color</label>
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
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium">Border Width</label>
              <div className="rounded-lg border border-gray-600 flex justify-between p-1">
                <input
                  type="number"
                  value={2}
                  className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
                />
                <span className="text-sm rounded-lg border border-gray-600 p-2">
                  PX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayButtonCustomization;
