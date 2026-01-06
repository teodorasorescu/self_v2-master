import styles from '../styling/home.module.scss';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import SelfMission from './SelfMission';
import SelectedForYouPage from './pages/selectedForYouShowcase/SelectedForYouPage';
import { summerProducts } from '../constants/productConstants';
import Reviews from './features/reviews/Reviews';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HOME_PHOTOS } from '../constants/inspoHome';
import ButtonHomePage from './ui/buttonHomePage/ButtonHomePage';
import CardsShowcase from './pages/cardsShowcase/CardsShowcase';

const Home = () => {
	const screenSizeSmartphone = useMediaQuery('(max-width:1024px)');

	return (
		<div className={styles.container}>
			{!screenSizeSmartphone ? (
				<div className={styles.photoGridDesktop}>
					{HOME_PHOTOS.map((photo, index) => (
						<div key={index} className={styles.photoGridItem}>
							<img
								src={photo.src}
								alt={photo.alt || `Photo ${index + 1}`}
								className={styles.photoGridImg}
								fetchpriority='high'
								loading='eager'
							/>
							{index === 0 && (
								<div className={styles.photoOverlay}>
									<div className={styles.overlayText}>
										<h1>Intention Cards</h1>
										<p>
											We have a ritual for you to become a better version of
											yourself.
										</p>
									</div>
									<div className={styles.buttonContainer}>
										<a href='/intention-cards'>
											<ButtonHomePage msg='SHOP NOW' />
										</a>{' '}
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			) : (
				<div className={styles.introductionImgContainer}>
					{
						<div className={styles.introductionContainer}>
							<div className={styles.mobileOnlyText}>
								<h1>Intention Cards</h1>
								<p>
									We have a ritual for you to become a better version of
									yourself.
								</p>
							</div>
							<div className={styles.buttonContainer}>
								<a href='/intention-cards'>
									<ButtonHomePage msg='SHOP NOW' />
								</a>{' '}
							</div>
						</div>
					}
				</div>
			)}
			<SelfMission />{' '}
			<CardsShowcase title='Intention Cards' group='holiday-card' />
			<VisualImages />{' '}
			<div className={styles.quizContainer}>
				<h1>
					{' '}
					Try our Art Finder Quiz and get matched with a personalised selection
					of art prints that fit your style.
				</h1>
				<a href='/quiz'>
					<ButtonHomePage msg='START QUIZ' />
				</a>
			</div>{' '}
			<SelectedForYouPage data={summerProducts} title='Trending Now' />
			<div className={styles.centeredContainer}>
				<a href='/canvas-art-prints'>
					<ButtonHomePage msg='View All' />
				</a>
			</div>{' '}
			<Benefits />{' '}
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
			<Reviews />
			<div className={styles.feedbackContainer}>
				<p>We'd love to hear your thoughts! How are we doing?</p>
				<a href='https://www.trustpilot.com/evaluate/self-posters.com'>
					<ButtonHomePage msg='Give Feedback' />
				</a>
			</div>
		</div>
	);
};

export default Home;
