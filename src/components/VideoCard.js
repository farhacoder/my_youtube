import React from "react";

function VideoCard({ info }) {
  if (!info || !info.snippet || !info.statistics) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  const { channelTitle, title, thumbnails } = info.snippet;
  const { viewCount } = info.statistics;

  return (
    <div className="w-80 p-3  hover:shadow-2xl transition duration-300 cursor-pointer">
      <img className="w-full h-44 " src={thumbnails.high.url} alt="thumbnail" />
      <div className="mt-3">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-sm text-gray-500">{channelTitle}</p>
        <p className="text-sm text-gray-600">{parseInt(viewCount).toLocaleString()} views</p>
      </div>
    </div>
  );
}

export default VideoCard;
