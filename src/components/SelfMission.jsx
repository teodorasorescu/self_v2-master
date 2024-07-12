import styles from '../styling/self.mission.module.scss';
import Hands from '../images/hands.svg';
import { benefits, headline, description } from '../constants/homeMission';

const SelfMission = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h3>{headline}</h3>
				<p className={styles.paragraph}>{description}</p>

				{benefits.map((t, i) => {
					return (
						<div className={styles.benefits} key={i}>
							<img
								src={Hands}
								alt='Self te indruma spre a te iubi si a te imbratisa'
							/>
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
