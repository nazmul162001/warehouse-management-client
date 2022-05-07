import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const getItems = async() => {
      const email = user.email;
      const url = `http://localhost:5000/myitem?email=${email}`;
      // fetch(url)
      // .then(res => res.json())
      // .then(data => setItems(data))
      
      // handle status code 
      try{
        const {data} = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        setItems(data)
      }
      catch(error){
        console.log(error.message);
        if(error.response.status === 401 || error.response.status === 403){
          signOut(auth)
          navigate('/login')
        }
      }
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