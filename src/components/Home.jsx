import styles from '../styling/home.module.scss';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import SelfMission from './SelfMission';
import SelectedForYouPage from './pages/selectedForYouShowcase/SelectedForYouPage';
import {
	selectedShowcaseProducts,
	summerProducts,
} from '../constants/productConstants';
import Reviews from './features/reviews/Reviews';
import useMediaQuery from '@mui/material/useMediaQuery';
import { HOME_PHOTOS } from '../constants/inspoHome';
import ButtonHomePage from './ui/buttonHomePage/ButtonHomePage';

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
								loading='lazy'
							/>
							{index === 0 && (
								<div className={styles.photoOverlay}>
									<div className={styles.overlayText}>
										<h1>Unsure where to start?</h1>
										<p>
											Try our Art Finder Quiz and get matched with a
											personalised selection of art prints and recommended
											colors that fit your style
										</p>
									</div>
									<div className={styles.buttonContainer}>
										<a href='/quiz'>
											<ButtonHomePage msg='Start Quiz' />
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
								<h1>Unsure where to start?</h1>
								<p>
									Try our Art Finder Quiz and get matched with a personalised
									selection of art prints & recommended colors that fit your
									style
								</p>
							</div>
							<div className={styles.buttonContainer}>
								<a href='/quiz'>
									<ButtonHomePage msg='Start Quiz' />
								</a>{' '}
							</div>
						</div>
					}
				</div>
			)}
			<SelfMission />
			<SelectedForYouPage data={summerProducts} title='Summer Selection' />
			<div className={styles.centeredContainer}>
				<a href='/canvas-art-prints'>
					<ButtonHomePage msg='View All' />
				</a>
			</div>
			<Benefits />
			<SelectedForYouPage
				data={selectedShowcaseProducts}
				title='Selected for you'
			/>
			<VisualImages />
			<Reviews />
			<div className={styles.feedbackContainer}>
				<p>We'd love to hear your thoughts! How are we doing?</p>
				<a href='https://www.trustpilot.com/evaluate/self-posters.com'>
					<ButtonHomePage msg='Give Feedback' />
				</a>
			</div>
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
		</div>
	);
};

export default Home;
