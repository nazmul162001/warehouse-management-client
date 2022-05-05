import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
  const [item, setItem] = useState({});

  const {id} = useParams();

  useEffect(()=> {
    fetch(`http://localhost:5000/service/${id}`)
    .then(res => res.json())
    .then(data => setItem(data))
  },[id])
  
  
  return (
    <div>
      <h1>This is details page of inventory {item.name} </h1>
    </div>
  );
};

export default InventoryDetails;