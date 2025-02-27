import React from "react";


function Comments({data}) {
    const {name,text,replies}=data
  return(
    <div className="flex shadow-sm bg-gray-100 rounded-lg my-2">
       <img className="w-12 h-12 bg-slate-100" src="https://t4.ftcdn.net/jpg/04/62/88/97/360_F_462889752_tSWP7qDYpUIL6QRlbyIC8v68jaXwVXyx.jpg" alt="icom"  />
    <div className="px-3 text-sm">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
    </div>
  </div>
  )
  
}

export default Comments;
