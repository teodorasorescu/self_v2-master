import classes from '../../../styling/posters.page.details.module.scss';
import PostersList from '../../features/postersList/PostersList';
import ProductItem from '../../features/products/ProductItem';

const PostersDetailsPage = ({ posters }) => {
	return (
		<div className={classes.container}>
			<h1>Canvas Art Prints</h1>
			<h2>
				A carefully crafted series of stunning canvas art prints, created with
				intention, embodying the essence of being through a harmonious blend of
				colors. Each piece is perfect for adding personality to your space,
				transforming ordinary rooms into vibrant expressions of style and
				creativity.
			</h2>
			<PostersList posters={posters} />
		</div>
	);
};

export default PostersDetailsPage;
