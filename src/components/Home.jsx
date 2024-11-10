import React from 'react';
import Flipcard from './Flipcard';
import styles from '../styling/home.module.scss';
import Button from '@mui/material/Button';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import OurStory from './OurStory';
import ColorsChoice from './ColorsChoice';
import PostersHomeLoading from './features/posters/PostersHomeLoading';
import StickersHomeLoading from './features/stickers/StickersHomeLoading';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
	const smartphoneScreen = useMediaQuery('max-width:1024px');

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
						{/* <h3 className={styles.subtitle}>
							New Canvas Art Prints Available Now - Limited Edition
						</h3> */}
						<div className={styles.buttonContainer}>
							<a href='/canvas-art-prints'>
								<Button className={styles.button}>GET YOURS</Button>
							</a>{' '}
						</div>
					</div>
				}
			</div>
			{/* {!smartphoneScreen && (
				<div className={styles.introductionContainer}>
					<h1 className={styles.title}>
						Embrace the Colors of Your Being and Feelings
					</h1>
					<h3 className={styles.subtitle}>
						New Canvas Art Prints and Frames Available Now <br />
						Limited Edition
					</h3>
					<div className={styles.buttonContainer}>
						<a href='/canvas-art-prints'>
							<Button className={styles.button}>GET YOURS</Button>
						</a>
					</div>
				</div>
			)} */}
			<PostersHomeLoading /> <Benefits />
			<StickersHomeLoading />
			<VisualImages />
			<div className={styles.text}>
				<h3>TABLOURI PERSONALIZATE</h3>
			</div>
			<Flipcard />
			<ColorsChoice />
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
			<OurStory />
		</div>
	);
};

export default Home;
