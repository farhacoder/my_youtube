import React, { useEffect, useState } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";

import { addMessages } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

function LiveChat() {
  const[liveMessage,setLiveMessage]=useState("")
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessages(
        { name: generateRandomName(), message: makeRandomMessage(12) }
      ));
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="ml-2 border border-black w-full h-[500px] bg-slate-50 overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c) => (
        <ChatMessages name={c.name} message={c.message} />
      ))}
    </div>
    <form onSubmit={(e)=>{e.preventDefault()
      dispatch(
        addMessages({
          name:"Rais",
          message:liveMessage
        })
        
      )
      setLiveMessage("")
    }} className=" w-full mx-2 p-2 border border-black flex items-center">
      <input type="text" className="w-80 border border-gray-600" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} />
      <button className="bg-green-400 h-10 p-1 ml-1 rounded-lg text-2xl font-bold">Send</button>
    </form>
    </>
  );
}

export default LiveChat;
