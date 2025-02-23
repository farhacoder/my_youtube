import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


function Head() {
  const dispatch=useDispatch()
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center p-2 shadow-md">
      {/* Left Section (Logo & Menu) */}
      <div className="flex items-center gap-4 px-4">
        <img
        onClick={()=>toggleMenuHandler()} 
         className="h-8 cursor-pointer" alt="menu" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" />
        <img className="h-8 cursor-pointer" alt="youtubeLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
      </div>

      {/* Middle Section (Search Bar) */}
      <div className="flex justify-center">
        <input type="text" className="border border-gray-300 rounded-l-full pl-4 w-[500px] h-10 focus:outline-none" placeholder="Search" />
        <button className="bg-gray-200 px-4 w-14 h-10 flex items-center justify-center border border-gray-300 rounded-r-full hover:bg-gray-300">
          <img className="h-5" src="https://img.icons8.com/ios7/512/search.png" alt="search-icon" />
        </button>
      </div>

      {/* Right Section (User Profile) */}
      <div className="flex items-center px-4">
        <img className="h-8 rounded-full cursor-pointer" src="https://t4.ftcdn.net/jpg/04/62/88/97/360_F_462889752_tSWP7qDYpUIL6QRlbyIC8v68jaXwVXyx.jpg" alt="admin" />
      </div>
    </div>
  );
}

export default Head;
