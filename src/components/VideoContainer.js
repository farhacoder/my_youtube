import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, incrementPage } from "../utils/videoSlice";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function VideoContainer() {
  const dispatch = useDispatch();
  const { items: videos, status, page, hasMore } = useSelector((state) => state.videos);
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVideos(page)); // Fetch initial videos
    }
  }, [dispatch, status, page]);

  useEffect(() => {
    if (inView && hasMore && status !== "loading") {
      dispatch(incrementPage());
      dispatch(fetchVideos(page + 1));
    }
  }, [inView, hasMore, status, dispatch, page]);

  return (
    <div className="flex flex-wrap">
      {videos.map((video, index) => (
        <Link key={`${video.id}-${index}`} to={"/watch?v=" + video.id} ref={index === videos.length - 1 ? ref : null}>
          <VideoCard info={video} />
        </Link>
      ))}
      {status === "loading" && <p className="w-full text-center py-4">Loading...</p>}
    </div>
  );
}

export default VideoContainer;

