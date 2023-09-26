import React, { useEffect, useState } from 'react';

const Hook = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCard(data));
  }, []);

  return [card];
};

export default Hook;
