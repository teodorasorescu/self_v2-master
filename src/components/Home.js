import React from 'react';
import Flipcard from './Flipcard';
import styles from '../styling/home.module.scss';
import Responsability from '../images/responsibility.png';
import RotateIcon from '../images/rotate.png';

const Home = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.imgContainer}></div>
				<div className={styles.textContainer}>
					<h1>
						Suntem uniunea dintre minte, suflet și corp. <br />
						Creează-ți un mediu care să reprezinte ființa ta și exprimă-ți
						sentimentele prin culori.
					</h1>
				</div>
			</div>
			<div className={styles.rotateContainer}>
				<img src={RotateIcon} alt='rotate' />
			</div>
			<Flipcard />
			<div className={styles.container}>
				<div className={styles.sustenabilityTextContainer}>
					<img src={Responsability} alt='description' />
					<p>
						<br />
						Confecționarea ramelor este facută din lemn natural certificat FSC,
						astfel lemnul provine din surse prietenoase pentru păduri,
						gestionate în mod responsabil.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
