import styles from '../styling/colors.choice.module.scss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { S3_BUCKET } from '../constants/links';

const ColorsChoice = () => {
	const screenSizeSmartphone = useMediaQuery('(max-width:1024px)');
	const colorsImg = S3_BUCKET + '/colors.webp';

	return (
		<div className={styles.container}>
			{screenSizeSmartphone ? (
				<>
					<div className={styles.colorsChoice}>
						<h3>CUM ALEGEM CULORILE?</h3>
						<img
							className={styles.colors}
							src={colorsImg}
							alt='semnificatie spirituala culori, psihologie, grafica, tablouri'
						/>
						<div className={styles.buttonContainer}>
							<Link to='/psihologia-culorilor'>
								<Button className={styles.button}>PSIHOLOGIA CULORILOR</Button>
							</Link>
						</div>
					</div>
					<div className={styles.firstContainer}></div>
				</>
			) : (
				<>
					<div className={styles.firstContainer}></div>
					<div className={styles.colorsChoice}>
						<h3>CUM ALEGEM CULORILE?</h3>
						<img
							className={styles.colors}
							src={colorsImg}
							alt='semnificatie spirituala culori, psihologie, grafica, tablouri'
						/>
						<div className={styles.buttonContainer}>
							<a href='/psihologia-culorilor'>
								<Button className={styles.button}>PSIHOLOGIA CULORILOR</Button>
							</a>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ColorsChoice;
