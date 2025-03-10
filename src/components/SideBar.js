import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const [showMore, setShowMore] = useState(false);
  const isMenuopen = useSelector((store) => store.app.isMenuOpen);

  const mainMenu = [
    { name: "Home", icon: "https://cdn-icons-png.flaticon.com/512/1946/1946436.png" },
    { name: "Shorts", icon: "https://cdn-icons-png.flaticon.com/512/1376/1376407.png" },
    { name: "Subscriptions", icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png" },
    { name: "You", icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png" },
  ];

  const yourLibrary = [
    { name: "History", icon: "https://cdn-icons-png.flaticon.com/512/892/892201.png" },
    { name: "Playlists", icon: "https://cdn-icons-png.flaticon.com/512/747/747310.png" },
    { name: "Your Videos", icon: "https://cdn-icons-png.flaticon.com/512/747/747376.png" },
    { name: "Your Courses", icon: "https://cdn-icons-png.flaticon.com/512/2279/2279431.png" },
    { name: "Watch Later", icon: "https://cdn-icons-png.flaticon.com/512/845/845646.png" },
    { name: "Liked Videos", icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png" },
  ];

  const subscriptions = [
    "Examपुर", "Akshay Saini", "Harkirat Singh", "Maths Concept King",
    "Coding Addict", "NEON CLASSES", "Gagan Pratap Maths"
  ];

  const explore = [
    { name: "Trending", icon: "https://cdn-icons-png.flaticon.com/512/6165/6165683.png" },
    { name: "Shopping", icon: "https://cdn-icons-png.flaticon.com/512/2331/2331947.png" },
    { name: "Music", icon: "https://cdn-icons-png.flaticon.com/512/1176/1176357.png" },
    { name: "Films", icon: "https://cdn-icons-png.flaticon.com/512/3014/3014405.png" },
    { name: "Live", icon: "https://cdn-icons-png.flaticon.com/512/2989/2989843.png" },
    { name: "Gaming", icon: "https://cdn-icons-png.flaticon.com/512/3039/3039436.png" },
    { name: "News", icon: "https://cdn-icons-png.flaticon.com/512/2838/2838912.png" },
    { name: "Sport", icon: "https://cdn-icons-png.flaticon.com/512/1086/1086090.png" },
    { name: "Courses", icon: "https://cdn-icons-png.flaticon.com/512/2279/2279431.png" },
    { name: "Fashion & Beauty", icon: "https://cdn-icons-png.flaticon.com/512/3076/3076676.png" },
    { name: "Podcasts", icon: "https://cdn-icons-png.flaticon.com/512/2921/2921877.png" }
  ];

  return (
    <div className={`h-screen bg-white shadow-md p-2 pt-4 transition-all duration-300 ${isMenuopen ? "w-60" : "w-16"}`}>
      
      {/* Main Menu */}
      <div className="mt-4">
        {mainMenu.map((item) => (
          <div key={item.name} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <img className="h-6" src={item.icon} alt={item.name} />
            {isMenuopen && <Link to="/"><span className="ml-4">{item.name}</span></Link>}
          </div>
        ))}
      </div>

      {/* Library */}
      <hr className="my-2" />
      <div>
        {yourLibrary.map((item) => (
          <div key={item.name} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <img className="h-6" src={item.icon} alt={item.name} />
            {isMenuopen && <span className="ml-4">{item.name}</span>}
          </div>
        ))}
      </div>

      {/* Subscriptions */}
      <hr className="my-2" />
      <div>
        <h3 className={`text-sm font-semibold ${isMenuopen ? "block" : "hidden"}`}>Subscriptions</h3>
        {subscriptions.slice(0, showMore ? subscriptions.length : 4).map((channel) => (
          <div key={channel} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <img className="h-6 rounded-full" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt={channel} />
            {isMenuopen && <span className="ml-4">{channel}</span>}
          </div>
        ))}
        {isMenuopen && (
          <button onClick={() => setShowMore(!showMore)} className="text-blue-500 text-sm ml-2">
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      {/* Explore Section */}
      <hr className="my-2" />
      <div>
        <h3 className={`text-sm font-semibold ${isMenuopen ? "block" : "hidden"}`}>Explore</h3>
        {explore.map((item) => (
          <div key={item.name} className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
            <img className="h-6" src={item.icon} alt={item.name} />
            {isMenuopen && <span className="ml-4">{item.name}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
