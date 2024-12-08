import PlaylistCard from './ManageProductPlaylist/PlaylistCard';

const ManageProductPlaylist = () => {
  const playlists = Array(15).fill({
    title: 'Video Title Name',
    videos: 5,
    thumbnail: '/path-to-thumbnail.jpg',
    duration: '04:05:60'
  });

  return (
   <div className='flex flex-col gap-3 w-full'>
      <div className="mt-3 text-white font-semibold text-[17px] flex justify-between">
          <h2>Manage Product Playlists - Product Title</h2>
        </div>
        <div className="flex gap-6 w-full h-full">
      <div className="grid grid-cols-5 gap-6  bg-[#26272f] p-4 rounded-2xl overflow-y-auto w-full h-full">
        {playlists.map((playlist, index) => (
          <PlaylistCard key={index} playlist={playlist} />
        ))}
      </div>    
    </div>
    </div>
    
  );
};

export default ManageProductPlaylist;
