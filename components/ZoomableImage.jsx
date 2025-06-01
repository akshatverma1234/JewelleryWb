"use client";
import React, { useRef, useState } from "react";

const ZoomableImage = ({ src, alt }) => {
  const imgRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2)",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: "scale(1)",
      transformOrigin: "center",
    });
  };

  return (
    <div
      className="overflow-hidden w-96 h-[600px] object-cover rounded-xl mb-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="transition-transform duration-300 ease-in-out object-cover w-full h-full"
        style={zoomStyle}
      />
    </div>
  );
};

export default ZoomableImage;
