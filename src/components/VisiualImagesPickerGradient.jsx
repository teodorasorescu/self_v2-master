import styles from '../styling/visual.images.gradient.module.scss';
import Sp1 from '../images/sp1.webp';
import Sp2 from '../images/sp2.webp';

const VisualImagesPickerGradient = () => {
	return (
		<div className={styles.container}>
			<img src={Sp1} alt='cristale, ulei esential, mediatie, bol' />
			<img src={Sp2} alt='alo mat, meditatie, concetrare' />
		</div>
	);
};

export default VisualImagesPickerGradient;
