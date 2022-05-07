import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const getItems = async() => {
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setItems(data))
    }
    getItems();
  },[user])
  return (
    <div>
      <h1>My Item {items.length} </h1>
    </div>
  );
};

export default MyItem;