import React from 'react';
import styles from '../styling/home.module.scss';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import PostersHomeLoading from './features/posters/PostersHomeLoading';
import Button from '@mui/material/Button';
import SelfMission from './SelfMission';
import SelectedForYouPage from './pages/selectedForYouShowcase/SelectedForYouPage';
import { selectedShowcaseProducts } from '../constants/productConstants';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.introductionImgContainer}>
				{
					<div className={styles.introductionContainer}>
						<div className={styles.buttonContainer}>
							<a href='/canvas-art-prints'>
								<Button className={styles.button}>SHOP NOW</Button>
							</a>{' '}
						</div>
					</div>
				}
			</div>
			<SelfMission />
			<PostersHomeLoading /> <Benefits />
			<SelectedForYouPage data={selectedShowcaseProducts} />
			<VisualImages />
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
		</div>
	);
};

export default Home;
