/* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Catagories from "./Catagories/Catagories";
import './Home.css'

const Home = () => {
  const allCard = useLoaderData();
  const [filteredItems, setFilteredItems] = useState(allCard);

  // Callback to update filtered items based on search query
  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() === "") {
      // If the search query is empty, reset to all items
      setFilteredItems(allCard);
    } else {
      // Filter items based on search query
      const filtered = allCard.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  if (!Array.isArray(allCard)) {
    return null;
  }

  return (
    <div>
      <div className="layout-container">
        <div className="overlay"></div>
        <Banner onSearch={handleSearch} />
      </div>

      <Catagories allCard={filteredItems} />
    </div>
  );
};

export default Home;
