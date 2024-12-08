import { CiYoutube } from "react-icons/ci";

const PlaylistCard = ({ playlist }) => {
    return (
      <div className="bg-gray-700 rounded-2xl overflow-hidden h-36 w-68 flex flex-col justify-between">
        <img
          src={playlist.thumbnail}
          alt={playlist.title}
          className="h-full w-full object-cover"
        />
        <div>
          <div className="flex gap-2 items-center pb-2">
            <div className="bg-blue-400 h-7 w-7 rounded-r-full"></div>
          <h3 className="text-sm font-semibold">{playlist.title}</h3>
          </div>
          <div className="flex justify-center items-center gap-2 p-2 bg-gray-800">
          <CiYoutube />
          <p className="text-sm text-gray-400">{playlist.videos} Videos</p>
        </div>
        </div>
      </div>
    );
  };
  
  export default PlaylistCard;
  