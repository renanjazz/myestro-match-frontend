import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { API_URL } from '../../config';

const RatingStudiosCard = ({ studio, handleRatingUpdate }) => {
	const [hasRated, setHasRated] = useState(false);
	const { currUser } = useContext(AuthContext);

    useEffect(() => {
		if (studio.user_already_rated.includes(currUser._id)) {
			setHasRated(true);
		}
	}, [studio.user_already_rated, currUser._id]);

	async function handleRating(value) {
		try {
			const {data} = await axios.patch(
				`${API_URL}/ratings/api/studios/${currUser._id}/rate/${studio._id}`,
				{ rating: value }
			);
			setHasRated(true);
            handleRatingUpdate(data, "studio")
		} catch (error) {
			console.error('Error rating the studio:', error);
		}
	}
	return (
		<div>
			{hasRated ? (
				<p>Thank you for your feedback!</p>
			) : (
				<div className='rating-box'>
					<p>How would you rate this studio?</p>
					<div className='rating-button-row'>
					<button className='rating-button' onClick={() => handleRating('positive')}>🙂</button>
					<button className='rating-button' onClick={() => handleRating('negative')}>🙁</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default RatingStudiosCard;
