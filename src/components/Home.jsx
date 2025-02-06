import React from 'react';
import styles from '../styling/home.module.scss';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import PostersHomeLoading from './features/posters/PostersHomeLoading';
import Button from '@mui/material/Button';
import SelfMission from './SelfMission';

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.introductionImgContainer}>
				{
					<div className={styles.introductionContainer}>
						<div className={styles.buttonContainer}>
							<a href='/canvas-art-prints'>
								<Button className={styles.button}>SHOP ALL</Button>
							</a>{' '}
						</div>
					</div>
				}
			</div>
			<SelfMission />
			<PostersHomeLoading /> <Benefits />
			<VisualImages />
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
		</div>
	);
};

export default Home;
