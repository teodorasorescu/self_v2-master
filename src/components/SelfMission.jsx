import styles from '../styling/self.mission.module.scss';
import { benefits, headline, description } from '../constants/homeMission';
import { S3_BUCKET } from '../constants/links';

const handsImg = S3_BUCKET + '/hands.svg';

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
								src={handsImg}
								alt=' SELF te va îndruma să te reconectezi cu sinele tău autentic și să explorezi universul creativității prin artă și culori.'
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
