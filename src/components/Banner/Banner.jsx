import React from "react";

const Banner = () => {
  return (
    <div className="flex gap-10 items-center bg-[#1313130d] justify-center py-20 rounded-xl w-full max-w-[1200px] mx-auto">
      <div>
        <h1 className="playfair-font text-5xl font-semibold">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="mt-16 bg-[#23be0a] text-white p-3 rounded-md">
          View The List
        </button>
      </div>
      <div>
        <img src='/pngwing1.png' alt="" />
      </div>
    </div>
  );
};

export default Banner;
