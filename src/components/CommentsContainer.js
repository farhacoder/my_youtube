import React from "react";
import Comments from "./Comments";
import { commentsData } from "../utils/commentsData";
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

function CommentsContainer() {
  return (
    <div className="py-3">
      <h1 className=" py-3 font-bold text-[26px]">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer;
