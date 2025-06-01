import Link from "next/link";
import React from "react";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <Link href="/">
        <img
          src={props.img}
          className="w-full group-hover:scale-105 transition-all group-hover:rotate-1"
          alt="Banner"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
