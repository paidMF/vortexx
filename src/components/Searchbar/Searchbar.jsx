import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";


const Searchbar = () => {
  return (
    <div className="wrapper">
      <div className="flexCenter search-bar">
        <HiLocationMarker color="var(--blue)" size={25} />
        <input type="text" />
        <button className="button">Search</button>
      </div>
    </div>
  );
};

export default Searchbar;
