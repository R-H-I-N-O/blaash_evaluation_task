import { useState } from "react";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex items-center justify-between bg-[#26272f] p-4 rounded-2xl shadow-md">
      <h1 className="text-lg font-bold text-white">Design Studio</h1>

      <div className="flex items-center gap-4">
      <button className="flex items-center gap-2 px-4 py-1 border border-blue-600 text-white text-[13px] rounded-xl hover:bg-blue-700">
          <span>
            <FaYoutube className="text-white-600"/>
          </span>{" "}
          Import From Youtube
        </button>
        <button className="flex items-center gap-2 px-4 py-1 border border-blue-600 text-white text-[13px] rounded-xl">
          <span>
            <LuMessageCircleQuestion className="text-blue-600"/>
          </span>{" "}
          Support Request
        </button>
        <button className="flex items-center gap-2 px-4 py-1 border border-blue-600 text-white text-[13px] rounded-xl">
          <span><img src="/productTour.png" alt="icon" className="h-4"/></span> Product Tour
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex pl-1 pr-1 border border-gray-600 justify-between items-center rounded-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Project..."
            className="bg-inherit text-white focus:outline-none focus:ring-blue-600 border-none outline-none"
          />
          <div className="border border-gray-600 items-center rounded-lg p-1">
            <FiSearch className="text-gray-400 text-[18px]" />
          </div>
        </div>

        <button className="border border-gray-600 items-center rounded-xl p-2">
          <FiBell size={20} />
        </button>

        <div className="flex items-center gap-2">
          <img
            src="/path-to-profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-white font-medium">Leonardo C</span>
          <FiChevronDown className="text-white font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Header;
