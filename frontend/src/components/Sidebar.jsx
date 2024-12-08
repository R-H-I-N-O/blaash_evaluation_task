import { PiCirclesFourFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { LuSquareMousePointer } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { name: "Revenue", icon: <PiCirclesFourFill /> },
    { name: "Shoppable Video", icon: <FaImage />, options: true },
    { name: "Story", icon: <FaImage />, options: true  },
    { name: "Live Commerce", icon: <FaImage />, options: true  },
    { name: "Playlist Manager", icon: <FaImage />, options: true,  active: true },
    { name: "One Click Post", icon: <LuSquareMousePointer /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
    { name: "Hire Influencer", icon: <IoSettingsSharp /> },
  ];

  return (
    <div className="w-64 bg-[#26272f] py-4 pl-6 rounded-2xl w-[20%] relative">
      <button className="absolute rounded-full p-2 bg-[#26272f] right-[-15px]">
        <div className="p-1 rounded-full bg-gray-400 text-black">
          <FaAngleLeft/>
        </div>
      </button>
      <img src="/logo.png" alt="logo" className="h-[40px] w-[100px] mb-8" />
      <ul className="flex flex-col gap-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col rounded-l-md font-medium text-sm p-2 pr-4 ${
              item.active
                ? "border-b border-t border-l border-blue-600 text-white bg-gray-800"
                : "hover:bg-gray-700"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center gap-3 p-2 ">
                <span className="text-[20px]">{item.icon}</span>
                <span>{item.name}</span>
              </div>
              <div className={item.options?"block":"hidden"}>{item.active?<FaChevronUp/>:<FaChevronDown/>}</div>
            </div>
            <button className={`${item.active?"bg-gray-600 text-white rounded-md mt-2 mb-1 hover:bg-gray-700 px-3 flex gap-2 items-center py-2":"hidden"}`}>
          Product Playlist
        </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
