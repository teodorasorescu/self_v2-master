import styles from '../styling/visual.images.module.scss';
import Button from './ui/button/Button';

const VisualImages = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<div className={styles.firstContainer}></div>

				<a href='/customized-canvas-posters'>
					<Button msg={'Custom Your Canvas Poster'} />
				</a>
			</div>
			<div className={styles.imgContainer}>
				<div className={styles.secondContainer}></div>
				<a href='/journal'>
					<Button msg={'Journal'} />
				</a>
			</div>
		</div>
	);
};

export default VisualImages;
