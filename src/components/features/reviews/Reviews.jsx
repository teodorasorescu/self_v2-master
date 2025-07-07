import ReviewCard from '../../ui/reviewCard/ReviewCard';
import './Reviews.scss';
const Reviews = () => {
	return (
		<div className='reviews-wrapper'>
			<ReviewCard
				name='Antonela Timis'
				rating={5}
				review="Ordered 2 posters and they are wonderful, exactly as I expected. Perfect for the soul. I will definitely come back with more orders, I'm very delighted! "
			/>

			<ReviewCard
				name='Fuchila Patricia'
				rating={5}
				review='SERIOUSNESS, QUALITY and DEDICATION can be seen with the naked eye in the painting!
        The colors and their appearance definitely blew me away and what such a personalized painting can convey is incredible!
        Thank you from the bottom of my heart and I am very happy with the purchase 🤍🥺'
			/>
		</div>
	);
};

export default Reviews;
