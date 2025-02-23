import React from "react";

function Button({ text, isActive, onClick }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-medium ${
        isActive ? "bg-black text-white" : "bg-gray-200 text-gray-800"
      } hover:bg-gray-300 transition-all`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
