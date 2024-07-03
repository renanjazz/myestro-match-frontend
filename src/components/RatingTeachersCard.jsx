import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { API_URL } from '../../config';

const RatingTeachersCard = ({ teacher }) => {
  const [hasRated, setHasRated] = useState(false);
  const { currUser } = useContext(AuthContext);

  useEffect(() => {
    if (teacher.user_already_rated.includes(currUser._id)) {
      setHasRated(true);
    }
  }, [teacher.user_already_rated, currUser._id]);

  async function handleRating(value) {
    try {
      await axios.patch(`${API_URL}/ratings/api/${currUser._id}/rate/${teacher._id}`, { rating: value });
      setHasRated(true); 
    } catch (error) {
      console.error('Error rating the teacher:', error);
    }
  }

  return (
    <div>
      {hasRated ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <div>
          <p>How would you rate your teacher?</p>
          <button onClick={() => handleRating('positive')}>🙂</button>
          <button onClick={() => handleRating('negative')}>🙁</button>
        </div>
      )}
    </div>
  );
};

export default RatingTeachersCard;
