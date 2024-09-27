import React, { useRef } from 'react';
import Flipcard from './Flipcard';
import styles from '../styling/home.module.scss';
import Button from '@mui/material/Button';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import SelfMission from './SelfMission';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import Sustenability from './Sustenability';
import OurStory from './OurStory';
import ColorsChoice from './ColorsChoice';
import useMediaQuery from '@mui/material/useMediaQuery';
import PostersHomeShowcase from './PostersHomeShowcase';
import PostersHomeLoading from './PostersHomeLoading';

const Home = ({ posters }) => {
	const smartphoneScreen = useMediaQuery('(max-width:768px)');
	const myRef = useRef(null);

	const executeScroll = () => {
		myRef.current.scrollIntoView();
	};

	return (
		<div className={styles.container}>
			<div className={styles.introductionImgContainer}>
				{smartphoneScreen && (
					<div className={styles.introductionContainer}>
						<h1 className={styles.title}>
							Reflect on Your True SELF: The Journey Begins Within
						</h1>
						<h1 className={styles.subtitle}>Tablouri Personalizate Canvas</h1>
						<div className={styles.buttonContainer}>
							{' '}
							<Button onClick={executeScroll} className={styles.button}>
								Începe Acum
							</Button>
						</div>
					</div>
				)}
			</div>
			{!smartphoneScreen && (
				<div className={styles.introductionContainer}>
					<h1 className={styles.title}>Reflect on Your True SELF:</h1>
					<h1 className={styles.title}>The Journey Begins Within</h1>
					<h1 className={styles.subtitle}>TABLOURI PERSONALIZATE CANVAS</h1>
					<div className={styles.buttonContainer}>
						{' '}
						<Button onClick={executeScroll} className={styles.button}>
							Începe Acum
						</Button>
					</div>
				</div>
			)}
			<div className={styles.inspoImages}>
				<PostersHomeLoading />
			</div>
			<SelfMission />{' '}
			<div ref={myRef}>
				<div className={styles.text}>
					<h3>TABLOURI</h3>
				</div>
				<Flipcard />
			</div>
			<VisualImages /> <Benefits />
			<ColorsChoice />
			<div className={styles.inspoImages}>
				<HomeInspirationShowcase />
			</div>
			<Sustenability />
			<OurStory />
		</div>
	);
};

export default Home;
