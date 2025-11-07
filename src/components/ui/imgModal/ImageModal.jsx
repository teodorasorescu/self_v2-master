import styles from './ImageModal.module.scss';
import CloseIcon from '@mui/icons-material/Close';

const ImageModal = ({ isOpen, onClose, imageSrc, alt }) => {
	if (!isOpen) return null;

	return (
		<div
			className={styles.overlay}
			onClick={onClose}
			role='dialog'
			aria-modal='true'
		>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<CloseIcon className={styles.closeIcon} onClick={onClose} />

				<img
					src={imageSrc}
					alt={alt || 'Image'}
					loading='lazy'
					className={styles.image}
				/>
			</div>
		</div>
	);
};

export default ImageModal;
