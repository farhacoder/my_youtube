import React from 'react'

function ChatMessages({name,message}) {
  return (
    <div className='flex items-center shadow-md '>
        <img className='w-8 h-8 bg-slate-50' src="https://t4.ftcdn.net/jpg/04/62/88/97/360_F_462889752_tSWP7qDYpUIL6QRlbyIC8v68jaXwVXyx.jpg" alt="icon" />
        <span className='font-bold px-2 text-[20px]'>{name}</span>
        <span className='text-[20px]'>{message}</span>
    </div>
  )
}

export default ChatMessages