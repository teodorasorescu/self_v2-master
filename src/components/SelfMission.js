import styles from '../styling/self.mission.module.scss';

const SelfMission = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h3>Home is where the art is</h3>
				<p className={styles.subheadline}>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
				</p>
				<p>
					In classical literature, discovered the undoubtable source. Lorem
					Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
				</p>
				<p>Rame colorate din lemn natural</p>
				<p>Postere de calitate din pânză</p>
			</div>
			<div className={styles.imgContainer}></div>
		</div>
	);
};

export default SelfMission;
