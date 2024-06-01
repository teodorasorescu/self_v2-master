import styles from '../styling/colors.choice.module.scss';
import Jumi from '../images/jumi.png';
import Colors from '../images/colors.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const ColorsChoice = () => {
	const screenSizeSmartphone = useMediaQuery('(max-width:1024px)');

	return (
		<div className={styles.container}>
			{screenSizeSmartphone ? (
				<>
					<div className={styles.colorsChoice}>
						<h3>CUM ALEGEM CULORILE?</h3>
						<img className={styles.colors} src={Colors} alt='colors' />
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
						<img className={styles.colors} src={Colors} alt='colors' />
						<div className={styles.buttonContainer}>
							<Link to='/psihologia-culorilor'>
								<Button className={styles.button}>PSIHOLOGIA CULORILOR</Button>
							</Link>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ColorsChoice;
