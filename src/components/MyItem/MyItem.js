import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyItemInfo from '../MyItemInfo/MyItemInfo';

const MyItem = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `https://agile-refuge-01523.herokuapp.com/myitem?email=${email}`;
      // fetch(url)
      // .then(res => res.json())
      // .then(data => setItems(data))

      // handle status code
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setItems(data);
      } catch (error) {
        console.log(error.message);
        // if (error.response.status === 401 || error.response.status === 403) {
        //   signOut(auth);
        //   navigate('/login');
        // }
      }
    };
    getItems();
  }, [items, user]);
  return (
    <div className="my-item px-10">
      <h1 className="text-center text-4xl text-gray-500">
        My Item {items.length}{' '}
      </h1>
      <div className="inventory px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
        {items.map((item) => (
          <MyItemInfo key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyItem;
