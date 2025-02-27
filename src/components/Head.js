import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const[sugestions,setSuggestions]=useState([])
  const[showSuggestions,setShowSuggestions]=useState(false)
  const searchCache=useSelector((store)=>store.search)

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }
    
      else{
        getYoutubeSearchSuggestions()}
       } , 200);
      
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getYoutubeSearchSuggestions = async () => {
    console.log("API CALL-"+ searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center p-2 shadow-md">
      {/* Left Section (Logo & Menu) */}
      <div className="flex items-center gap-4 px-4">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
        />
        <img
          className="h-8 cursor-pointer"
          alt="youtubeLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        />
      </div>

      {/* Middle Section (Search Bar) */}
     <div  className="flex flex-col items-center w-full mt-4 relative">
     <div className="flex justify-center w-full max-w-xl">
        <input
          type="text"
          className="border border-gray-300 rounded-l-full pl-4 w-[500px] h-10 focus:outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
  
        />
        <button className="bg-gray-200 px-4 w-14 h-10 flex items-center justify-center border border-gray-300 rounded-r-full hover:bg-gray-300">
          <img
            className="h-5"
            src="https://img.icons8.com/ios7/512/search.png"
            alt="search-icon"
          />
        </button>
      </div>
      {showSuggestions&&(<div className="bg-white rounded-lg shadow-md mt-1 w-full max-w-xl absolute top-12 z-10 ">
        <ul>
          {sugestions.map((s)=><li className="px-4 py-2 cursor-pointer text-xl hover:bg-gray-100 border-b last:border-b-0" key={s}>{s}</li>)}
        </ul>
      </div>)}
     </div>

      {/* Right Section (User Profile) */}
      <div className="flex items-center px-4">
        <img
          className="h-8 rounded-full cursor-pointer"
          src="https://t4.ftcdn.net/jpg/04/62/88/97/360_F_462889752_tSWP7qDYpUIL6QRlbyIC8v68jaXwVXyx.jpg"
          alt="admin"
        />
      </div>
    </div>
  );
}

export default Head;
