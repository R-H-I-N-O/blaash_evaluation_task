const PlaylistCard = ({ playlist }) => {
    return (
      <div className="bg-[#2c2c2c] rounded-2xl overflow-hidden relative shadow-md w-44 h-64 flex flex-col justify-between">
        {/* Thumbnail with overlay */}
        <div className="relative">
          <img
            src={playlist.thumbnail}
            alt={playlist.title}
            className="h-32 w-full object-cover"
          />
          {/* Duration Badge */}
          <div className="absolute top-0 right-0 bg-gray-700 rounded-bl-lg px-2 py-1">
            {playlist.duration}
          </div>
          {/* Checkbox */}
          <div className="absolute top-0 left-0 bg-gray-700 rounded-br-lg p-3">
            <input
              type="checkbox"
              className="w-4 h-4 accent-purple-500"
            />
          </div>
        </div>
        
        {/* Title and Metadata */}
        <div className="p-2 text-white text-center bg-gray-700">
          <h3 className="text-sm font-semibold truncate">{playlist.title}</h3>
          <p className="text-xs text-gray-400 truncate">
            Products Attached: {playlist.productsCount}
          </p>
        </div>
      </div>
    );
  };
  
  export default PlaylistCard;
  