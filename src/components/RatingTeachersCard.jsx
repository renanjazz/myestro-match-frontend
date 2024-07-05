import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { API_URL } from '../../config';

const RatingTeachersCard = ({ teacher, handleRatingUpdate }) => {
	const [hasRated, setHasRated] = useState(false);
	const { currUser } = useContext(AuthContext);
	

	useEffect(() => {
		if (teacher.user_already_rated.includes(currUser._id)) {
			setHasRated(true);
		}
	}, [teacher.user_already_rated, currUser._id]);

	const handleRating = async (value) => {
		try {
			const { data } = await axios.patch(`${API_URL}/ratings/api/teachers/${currUser._id}/rate/${teacher._id}`, { rating: value });
			setHasRated(true); 
			handleRatingUpdate(data, "teacher");
		} catch (error) {
			console.error('Error rating the teacher:', error);
		}
	};

  return (
    <div>
      {hasRated ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <div className='rating-box'>
          <p>How would you rate this teacher?</p>
          <div className='rating-button-row'>
          <button className='rating-button' onClick={() => handleRating('positive')}>🙂</button>
          <button className='rating-button' onClick={() => handleRating('negative')}>🙁</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingTeachersCard;