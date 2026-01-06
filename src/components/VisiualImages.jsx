import styles from '../styling/visual.images.module.scss';
import Button from './ui/button/Button';

const VisualImages = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<div className={styles.firstContainer}></div>
				<a href='/journal/why-intention-shapes-a-better-life'>
					<Button msg={'How to Set Your Intention'} />
				</a>
			</div>
			<div className={styles.imgContainer}>
				<div className={styles.secondContainer}></div>
				<a href='/journal/about-pav-self-expression-through-art'>
					<Button msg={'Journal'} />
				</a>
			</div>
		</div>
	);
};

export default VisualImages;
