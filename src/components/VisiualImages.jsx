import { useNavigate } from 'react-router-dom';
import styles from '../styling/visual.images.module.scss';
import { INSTAGRAM_LINK } from '../constants/socialMediaLinks';

const VisualImages = () => {
	const navigate = useNavigate();
	const sendToCustom = () => {
		navigate('/customized-canvas-posters');
	};
	return (
		<div className={styles.container}>
			<div className={styles.firstContainer}>
				{/* {' '}
				<Button
					msg={'Customize your poster'}
					style={styles.buttonStyle}
					onClick={sendToCustom}
				/> */}
			</div>
			<div className={styles.secondContainer}></div>
		</div>
	);
};

export default VisualImages;
