import Sidebar from "../components/Sidebar";
import PlaylistManager from "../components/PlaylistManager";
import Header from "../components/Header";
import ManageProductPlaylist from "../components/ManageProductPlaylist";
import GenerateCodeSettings from "../components/GenerateCodeSetting";


function Dashboard() {
  return (
    <div className="flex h-full bg-[#1c1c22] text-[#838293] p-4 gap-8">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full gap-5">
        <Header />
        {/* Main Content */}
        
        <div className="flex w-full h-full">
          <PlaylistManager />
          {/* <ManageProductPlaylist/> */}
          {/* <GenerateCodeSettings/> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;