import React, { useState } from "react";
import { GrUpdate } from "react-icons/gr";

const VideoDetails = () => {
  const [thumbnailTitle, setThumbnailTitle] = useState("Get Sporty in Style");
  const [videoStatus, setVideoStatus] = useState("active");
  const productList = [
    { id: 1, title: "Video Title Name", duration: "4:05:60", products: 5, color: "bg-purple-600" },
    { id: 2, title: "Video Title Name", duration: "4:05:60", products: 5, color: "bg-red-600" },
    { id: 3, title: "Video Title Name", duration: "4:05:60", products: 5, color: "bg-yellow-600" },
  ];

  return (
    <div className="bg-[#26272f] p-4 rounded-lg shadow-lg w-full max-w-md h-full flex flex-col justify-between">
      {/* Thumbnail Title */}
      <div className="mb-4">
        <label htmlFor="thumbnailTitle" className="block text-sm font-medium text-gray-300 mb-1">
          Thumbnail Title
        </label>
        <input
          type="text"
          id="thumbnailTitle"
          value={thumbnailTitle}
          onChange={(e) => setThumbnailTitle(e.target.value)}
          className="w-full p-2 bg-transparent mt-2 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Video Status */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">Video status</label>
        <div className="flex items-center gap-4 mt-2">
          <label className="flex items-center text-gray-300">
            <input
              type="radio"
              value="active"
              checked={videoStatus === "active"}
              onChange={(e) => setVideoStatus(e.target.value)}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="flex items-center text-gray-300">
            <input
              type="radio"
              value="inactive"
              checked={videoStatus === "inactive"}
              onChange={(e) => setVideoStatus(e.target.value)}
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>
      </div>

      {/* Product List */}
      <div className="mb-4 h-full">
        <h3 className="text-sm font-medium text-gray-300 mb-2">Product List</h3>
        <div className="space-y-2 overflow-y-auto mt-4">
          {productList.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border border-gray-600 p-2 rounded-lg relative"
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 ${product.color} flex items-center justify-center rounded-md`}
                >
                  <span className="text-gray-300 text-sm font-bold">M</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">{product.title}</p>
                  <p className="text-xs text-gray-400 bg-gray-600 rounded-full px-2 w-[48%]">{product.duration}</p>
                  <p className="text-xs text-gray-400">Products Attached: {product.products}</p>
                </div>
              </div>
              <div className="absolute right-0 top-0 p-2 pt-1 bg-gray-700 rounded-bl-lg">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Playlist Button */}
      <div className="flex items-center justify-center">
      <button className="px-3 py-1 bg-blue-600 text-gray-300 rounded-md hover:bg-blue-700 flex gap-2 items-center">
      <GrUpdate />
        Update Playlist
      </button>
      </div>
    </div>
  );
};

export default VideoDetails;
