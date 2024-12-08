import CodeSettings from "./CodeSettings/CodeSettings";
import { IoLinkSharp } from "react-icons/io5";

const GenerateCodeSettings = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="mt-3 text-white font-semibold text-[17px] flex justify-between">
        <h2>Generate Code Setting</h2>
        <button className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 px-3 flex gap-2 items-center py-1">
          <IoLinkSharp className="text-[18px]" />
          Generate Code
        </button>
      </div>
      <CodeSettings/>
    </div>
  );
};

export default GenerateCodeSettings;
