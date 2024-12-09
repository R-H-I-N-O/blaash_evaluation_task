import PlaylistCard from './PlaylistManager/PlaylistCard';
import VideoDetails from './PlaylistManager/VideoDetails';
import { IoLinkSharp } from "react-icons/io5";

const PlaylistManager = ({playlists}) => {

  return (
   <div className='flex flex-col gap-3 w-full'>
      <div className="mt-3 text-white font-semibold text-[17px] flex justify-between">
          <h2>Product Playlists</h2>
          <button className="bg-blue-600 text-white rounded-xl hover:bg-blue-700 px-3 flex gap-2 items-center py-1">
          <IoLinkSharp className="text-[18px]"/>
            Generate Code
          </button>
        </div>
        <div className="flex gap-6 w-full h-full">
      <div className="grid grid-cols-3 gap-6  bg-[#26272f] p-4 rounded-2xl overflow-y-auto w-full h-full">
        {playlists.map((playlist, index) => (
          <PlaylistCard key={index} playlist={playlist} />
        ))}
      </div>
      <div className='w-[35%]'>
        <VideoDetails />
        </div>
      
    </div>
    </div>
    
  );
};

export default PlaylistManager;
