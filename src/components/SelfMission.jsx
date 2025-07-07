import styles from '../styling/self.mission.module.scss';
import { headline } from '../constants/homeMission';

const SelfMission = () => {
	return (
		<div className={styles.container}>
			<>
				<div className={styles.text}>
					<h3>{headline}</h3>
				</div>
				<div className={styles.imgContainer}>
					<p className={styles.paragraph}>
						Self Posters connects{' '}
						<b className={styles.boldColor}>talented independent artists</b>{' '}
						with those seeking{' '}
						<b className={styles.boldColor}>unique, expressive designs</b> for
						their homes. Each piece is{' '}
						<b className={styles.boldColor}>emotion, color and creativity </b>{' '}
						brought to life. By choosing our posters, you support artists while
						turning your walls into{' '}
						<b className={styles.boldColor}>a true reflection of you.</b>
					</p>
				</div>
			</>
		</div>
	);
};

export default SelfMission;
