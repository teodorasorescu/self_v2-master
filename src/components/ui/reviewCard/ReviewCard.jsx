import './ReviewCard.scss';

const ReviewCard = ({ rating, review, name }) => {
	return (
		<div className='review-card'>
			<div className='review-stars'>
				{'★'.repeat(rating)}
				<span className='inactive-stars'>{'★'.repeat(5 - rating)}</span>
			</div>
			<p className='review-text'>"{review}"</p>
			<p className='review-name'>{name}</p>
		</div>
	);
};

export default ReviewCard;
