import React, { useRef } from 'react';
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
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
	const smartphoneSize = useMediaQuery('(max-width:1024px)');

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
					<h1 className={styles.subtitle}>BODY MIND SOUL</h1>
					<div className={styles.buttonContainer}>
						{' '}
						<Button onClick={executeScroll} className={styles.button}>
							Începe Acum
						</Button>
					</div>
				</div>
			</div>
			<SelfMission />
			{smartphoneSize ? (
				<>
					<Benefits /> <VisualImages />
				</>
			) : (
				<>
					<VisualImages />
					<Benefits />
				</>
			)}
			<div ref={myRef}>
				<div className={styles.text}>
					<h3>TABLOURI</h3>
				</div>
				<Flipcard />
			</div>

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
