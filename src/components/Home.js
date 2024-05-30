import React, { useRef } from 'react';
import Flipcard from './Flipcard';
import styles from '../styling/home.module.scss';
import Jumi from '../images/jumi.png';
import Colors from '../images/colors.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import HomeInspirationShowcase from './HomeInspirationShowcase';
import SelfMission from './SelfMission';
import Benefits from './Benefits';
import VisualImages from './VisiualImages';
import Sustenability from './Sustenability';
import OurStory from './OurStory';

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
					<h1 className={styles.subtitle}>POSTERE GRADIENT PERSONALIZATE</h1>
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

				<div className={styles.colorsContainer}>
					<img className={styles.jumi} src={Jumi} alt='jumi' />
					<div className={styles.colorsChoice}>
						<h3>CUM ALEGEM CULORILE?</h3>
						<img className={styles.colors} src={Colors} alt='colors' />
						<div className={styles.buttonContainer}>
							<Link to='/psihologia-culorilor'>
								<Button className={styles.button}>PSIHOLOGIA CULORILOR</Button>
							</Link>
						</div>
					</div>
				</div>

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
