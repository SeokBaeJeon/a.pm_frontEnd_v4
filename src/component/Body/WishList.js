import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const WishList = ({ token }) => {
  const [likedActors, setLikedActors] = useState([]);
  const tokenFromLocalStorage = localStorage.getItem('token');

  useEffect(() => {
    const fetchLikedActors = async () => {
      try {
        const response = await axios.get(' https://apm-backend-a20e349efc23.herokuapp.com/user/liked/actors', {
          headers: {
           'Authorization': `Bearer ${tokenFromLocalStorage}`,
          },
        });
        setLikedActors(response.data);
      } catch (error) {
        console.error('Error fetching liked actors:', error);
      }
    };

    fetchLikedActors();
  }, [token]);

  return (
    <div>
      <h2>관심 배우 목록</h2>
      <ul>
        {likedActors.map(actor => (
          <li key={actor.actorId}>
            <span>{actor.actorName}</span>
            <span>
              {actor.isLiked ? (
                <AiFillHeart style={{ color: 'gray', marginLeft: '10px' }} />
              ) : (
                <AiOutlineHeart style={{ color: 'red', marginLeft: '10px' }} />
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default WishList;