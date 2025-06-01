import React, { useState } from "react";

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState("S");

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  return (
    <div className="flex justify-between items-center">
      <ul className="flex gap-10 pt-2">
        {sizes.map((size) => (
          <li
            key={size}
            className={`rounded-3xl w-12 h-12 flex items-center justify-center cursor-pointer text-white font-semibold
              ${
                selectedSize === size
                  ? "bg-violet-800 scale-110 shadow-lg"
                  : "bg-gray-400"
              }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SizeSelector;
