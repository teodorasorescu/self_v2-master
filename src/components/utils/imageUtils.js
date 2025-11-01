import { getImageUrl } from '../utils/imageUtils';

const OptimizedImage = ({ src, alt, className }) => {
	return (
		<img
			src={getImageUrl(src)}
			alt={alt}
			className={className}
			loading='lazy'
		/>
	);
};

export default OptimizedImage;
