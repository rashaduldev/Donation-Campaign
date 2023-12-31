/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Banner = ({ onSearch }) => {
const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="text-center items-center h-[80vh] flex justify-center">
      <div className="relative mx-10">
        <h1 className="text-3xl font-bold my-8 lg:text-5xl">
          I Grow By Helping People In Need
        </h1>

        <input
          className="p-2 mt-8 w-full lg:w-3/4 rounded"
          style={{ border: "1px solid black" }}
          type="text"
          placeholder="Search here...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute top-[169px] right-[1px] md:top-[133px] lg:top-[145px] lg:right-[96px]">
          <button
            style={{ borderRight: "1px solid black" }}
            className="text-white bg-red-500 p-2 rounded-r-sm"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
