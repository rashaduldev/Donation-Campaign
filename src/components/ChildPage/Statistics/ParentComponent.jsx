import React, { useState } from 'react';
import Card from '../Card/Card';


const ParentComponent = () => {
  const [sumOfValues, setSumOfValues] = useState(0);

  const handleDonate = (price) => {
    // Update the sumOfValues here with the donated price
    setSumOfValues(sumOfValues + price);
  };

  // Sample card data
  const cardData = {
    id: 1,
    img: 'sample-image-url',
    price: 10, // Example price, replace with your data
    title: 'Sample Card',
    description: 'This is a sample card description.',
    category: 'Sample Category',
    card_bg_color: '#FFFFFF',
    text_button_bg_color: '#009444',
    category_bg_text_color: '#000000',
  };

  return (
    <div>
      {/* Other content */}
      <Card data={cardData} onDonate={handleDonate}></Card>
      {/* Other cards */}
      <p>Total Donation: ${sumOfValues}</p>
    </div>
  );
};

export default ParentComponent;
