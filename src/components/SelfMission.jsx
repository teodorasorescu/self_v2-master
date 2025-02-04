import styles from '../styling/self.mission.module.scss';
import { benefits, headline, description } from '../constants/homeMission';
import { S3_BUCKET } from '../constants/links';

const handsImg = S3_BUCKET + '/hands.svg';

const SelfMission = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h3>{headline}</h3>
			</div>
			<div className={styles.imgContainer}>
				<p className={styles.paragraph}>{description}</p>
			</div>
		</div>
	);
};

export default SelfMission;
