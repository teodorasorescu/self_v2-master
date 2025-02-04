import React from 'react';
import Flipcard from './Flipcard';
import styles from '../styling/home.module.scss';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import ColorsChoice from './ColorsChoice';
import PostersHomeLoading from './features/posters/PostersHomeLoading';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import SelfMission from './SelfMission';

const Home = () => {
	const smartphoneScreen = useMediaQuery('(max-width:1024px)');

	return (
		<div className={styles.container}>
			<div className={styles.introductionImgContainer}>
				{
					<div className={styles.introductionContainer}>
						{!smartphoneScreen && (
							<h1 className={styles.title}>
								Embrace the Colors <br /> of Your Being and Feelings
							</h1>
						)}

						<div className={styles.buttonContainer}>
							<a href='/canvas-art-prints'>
								<Button className={styles.button}>GET YOURS</Button>
							</a>{' '}
						</div>
					</div>
				}
			</div>
			<SelfMission />
			<PostersHomeLoading /> <Benefits />
			<div className={styles.text}>
				<h3>TABLOURI PERSONALIZATE</h3>
			</div>
			<Flipcard />
			<VisualImages />
			<ColorsChoice />
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
		</div>
	);
};

export default Home;
