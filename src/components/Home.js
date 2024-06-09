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

const Home = () => {
	const myRef = useRef(null);
	const executeScroll = () => {
		myRef.current.scrollIntoView();
	};
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.introductionImgContainer}></div>
				<div className={styles.introductionContainer}>
					<h1 className={styles.title}>
						Creează-ți un mediu care să <br /> reprezinte ființa ta și
						exprimă-ți <br /> sentimentele prin culori.
					</h1>
					<h1 className={styles.subtitle}>POSTERE PERSONALIZATE</h1>
					<h1 className={styles.subtitle}>BODY MIND SOUL</h1>
					<div className={styles.buttonContainer}>
						{' '}
						<Button onClick={executeScroll} className={styles.button}>
							Începe Acum
						</Button>
					</div>
				</div>
				<SelfMission />
				<Benefits />
				<VisualImages />
				<div ref={myRef}>
					<div className={styles.text}>
						<h3>POSTERE</h3>
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
		</div>
	);
};

export default Home;
