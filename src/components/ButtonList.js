import React, { useState } from "react";
import Button from "./Button";

const categories = [
  "All", "Music", "Gaming", "News", "Sports", "Movies",
  "Tech", "Live", "Podcasts", "Fashion", "Education", "Trending"
];

function ButtonList() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex space-x-2 overflow-x-auto scrollbar-hide p-2">
      {categories.map((category) => (
        <Button
          key={category}
          text={category}
          isActive={activeCategory === category}
          onClick={() => setActiveCategory(category)}
        />
      ))}
    </div>
  );
}

export default ButtonList;
