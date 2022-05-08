import { useEffect, useState } from 'react';

const useInventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch('https://agile-refuge-01523.herokuapp.com/service')
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, [inventory]);
  return [inventory, setInventory];
};

export default useInventory;
