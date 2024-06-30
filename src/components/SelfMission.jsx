import styles from '../styling/self.mission.module.scss';
import Hands from '../images/hands.svg';
import {
	benefits,
	headline,
	subheadline,
	description,
} from '../constants/homeMission';

const SelfMission = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h3>{headline}</h3>
				<p className={styles.subheadline}>{subheadline} </p>
				<p className={styles.paragraph}>{description}</p>

				{benefits.map((t, i) => {
					return (
						<div className={styles.benefits} key={i}>
							<img src={Hands} alt='hands' />
							<p>{t}</p>
						</div>
					);
				})}
			</div>
			<div className={styles.imgContainer}></div>
		</div>
	);
};

export default SelfMission;
