import PlayButtonStyle from "./PlayButtonStyle";
import Appearance from "./Apperance";
import ArrowStyle from "./ArrowStyle";
import Position from "./Position";
import PlayButtonCustomization from "./PlayButtonCustomization";

const CodeSettings = () => {
  return (
    <div className="min-h-screen text-white pt-4 space-y-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Play Button Style */}
        <PlayButtonStyle />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 col-span-2">
          {/* Appearance */}
          <Appearance />
          {/* ArrowStyle */}
          <ArrowStyle />
          {/* Position */}
          <Position />
          {/* Play Button Customization */}
          <PlayButtonCustomization />
        </div>
      </div>
    </div>
  );
};

export default CodeSettings;
