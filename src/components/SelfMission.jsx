import styles from '../styling/self.mission.module.scss';

const SelfMission = () => {
	return (
		<div className={styles.container}>
			<>
				<div className={styles.text}>
					<h3>Supporting Emerging Artists, Inspiring Spaces</h3>
				</div>
				<div className={styles.imgContainer}>
					<p className={styles.paragraph}>
						Self Posters connects{' '}
						<b className={styles.boldColor}>talented emerging artists</b> with
						those seeking{' '}
						<b className={styles.boldColor}>unique, expressive designs</b> for
						their homes. We collaborate with creatives from diverse backgrounds,
						giving them a platform to showcase their work. By fostering this
						community, we not only bring exclusive artwork to our customers but
						also support the artists behind each piece.
					</p>
				</div>
			</>
		</div>
	);
};

export default SelfMission;
