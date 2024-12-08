import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";

const Appearance = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-4 bg-[#26272f] p-4 rounded-lg h-full">
      <button
        className="text-lg font-semibold text-white bg-[#323338] flex justify-between w-full items-center p-2 rounded-xl"
        onClick={() => setVisible(!visible)}
      >
        Appearance <FaChevronDown />
      </button>

      <div className={`flex flex-col gap-4 ${visible ? "block" : "hidden"}`}>
        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Width</label>
            <div className="rounded-lg border border-gray-600 flex justify-between p-1">
              <input
                type="number"
                value={140}
                className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
              />
              <span className="text-sm rounded-lg border border-gray-600 p-2">
                PX
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-medium">Height</label>
            <div className="rounded-lg border border-gray-600 flex justify-between p-1">
              <input
                type="number"
                value={140}
                className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
              />
              <span className="text-sm rounded-lg border border-gray-600 p-2">
                PX
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-medium">Radius</label>
            <div className="rounded-lg border border-gray-600 flex justify-between p-1">
              <select className="bg-[#26272f] text-white ml-1 w-full border-none outline-none">
                <option>0</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-medium">Width</label>
            <div className="flex gap-2 p-1 h-full items-center">
              <input
                type="radio"
                checked={true}
                className="w-5 h-5 rounded-md"
              />
              <span className="text-sm">Show Border</span>
            </div>
          </div>
        </div>
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
            <label className="text-sm font-medium">Border Width</label>
            <div className="rounded-lg border border-gray-600 flex justify-between p-1">
              <input
                type="number"
                value={140}
                className="bg-[#26272f] text-white ml-1 w-[80%] border-none outline-none"
              />
              <span className="text-sm rounded-lg border border-gray-600 p-2">
                PX
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-8 w-full">
          <div className="flex flex-col gap-3 w-full">
            <label className="text-sm font-medium">Drop Shadow</label>
            <div className="rounded-lg border border-gray-600 flex justify-between">
              <select className="bg-[#26272f] text-white mx-1 w-full border-none outline-none">
                <option>No Shadow</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
