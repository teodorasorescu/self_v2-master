import React, { useRef, useState, useEffect } from 'react';
import Flipcard from './Flipcard';
import styles from '../styling/home.module.scss';
import Button from '@material-ui/core/Button';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import SelfMission from './SelfMission';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import Sustenability from './Sustenability';
import OurStory from './OurStory';
import ColorsChoice from './ColorsChoice';

const Home = () => {
	const [imgHeight, setImgHeight] = useState('1000px'); // Default width to 100%

	useEffect(() => {
		const img = new Image();
		img.src = require('../images/1.jpeg'); // Use require to import the image

		img.onload = () => {
			setImgHeight(`${img.naturalHeight}px`);
		};
	}, []);

	const myRef = useRef(null);
	const executeScroll = () => {
		myRef.current.scrollIntoView();
	};
	return (
		<div className={styles.container}>
			<div className={styles.introductionImgContainer}>
				<div className={styles.introductionContainer}>
					<h1 className={styles.title}>SHOW YOUR TRUE COLORS</h1>
					<h1 className={styles.subtitle}>Tablouri Personalizate Canvas</h1>
					<h1 className={styles.secondSubtitle}>BODY MIND SOUL</h1>
					<div className={styles.buttonContainer}>
						{' '}
						<Button onClick={executeScroll} className={styles.button}>
							Începe Acum
						</Button>
					</div>
				</div>
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
