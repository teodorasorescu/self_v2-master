import styles from '../styling/home.module.scss';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import PostersHomeLoading from './features/posters/PostersHomeLoading';
import Button from '@mui/material/Button';
import SelfMission from './SelfMission';
import SelectedForYouPage from './pages/selectedForYouShowcase/SelectedForYouPage';
import {
	selectedShowcaseProducts,
	summerProducts,
} from '../constants/productConstants';
import Reviews from './features/reviews/Reviews';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.introductionImgContainer}>
				{
					<div className={styles.introductionContainer}>
						<div className={styles.mobileOnlyText}>
							<h1>Unsure where to start?</h1>
							<p>
								Try our Art Finder Quiz and get matched with a personalised
								selection of art prints that fit your style
							</p>
						</div>
						<div className={styles.buttonContainer}>
							<a href='/quiz'>
								<Button className={styles.button}>START QUIZ</Button>
							</a>{' '}
						</div>
					</div>
				}
			</div>
			<SelfMission />
			<SelectedForYouPage data={summerProducts} title='Summer Selection' />
			<Benefits />
			<SelectedForYouPage
				data={selectedShowcaseProducts}
				title='Selected for you'
			/>
			<VisualImages />
			<Reviews />
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
		</div>
	);
};

export default Home;
