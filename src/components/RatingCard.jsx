import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { API_URL } from '../../config';

const RatingCard = ({ entity, type }) => {
	const { currUser } = useContext(AuthContext);
	const [positiveScore, setPositiveScore] = useState(entity.positive_scoring);
	const [negativeScore, setNegativeScore] = useState(entity.negative_scoring);
	const [userRating, setUserRating] = useState(null);

	useEffect(() => {
		if (!currUser) {
			return;
		}
		const fetchUserRating = async () => {
			try {
				const { data } = await axios.get(
					`${API_URL}/ratings/api/ratings/user/${currUser._id}/${type}/${entity._id}`,
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem('authToken')}`,
						},
					}
				);
				setUserRating(data);
			} catch (error) {
				console.error('Error fetching user rating:', error);
			}
		};

		fetchUserRating();
	}, [currUser._id, type, entity._id]);

	const handleRate = async (ratingType) => {
		try {
			await axios.post(
				`${API_URL}/ratings/api/${type}/${entity._id}/rate/${currUser._id}`,
				{ type: ratingType },
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem('authToken')}`,
					},
				}
			);

			if (ratingType === 'positive') {
				setPositiveScore(positiveScore + 1);
			} else {
				setNegativeScore(negativeScore + 1);
			}
			setUserRating({ type: ratingType });
		} catch (error) {
			console.error('Error rating:', error);
		}
	};

	const calculatePercentage = (positive, negative) => {
		const total = positive + negative;
		return total === 0 ? 0 : Math.round((positive / total) * 100);
	};

	const ratingPercentage = calculatePercentage(positiveScore, negativeScore);

	return (
		<div>
			<p>Rating: {ratingPercentage}%</p>
			{userRating ? (
				<p>
					You have rated this {type} as {userRating.type}
				</p>
			) : (
				<>
					<button onClick={() => handleRate('positive')}>Positive</button>
					<button onClick={() => handleRate('negative')}>Negative</button>
				</>
			)}
		</div>
	);
};

export default RatingCard;
