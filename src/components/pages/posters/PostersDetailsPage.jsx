import classes from '../../../styling/posters.page.details.module.scss';
import PostersList from '../../features/postersList/PostersList';
import Banner from '../../ui/banner/Banner';

const PostersDetailsPage = ({ posters }) => {
	return (
		<div className={classes.container}>
			<h1>Canvas Art Prints</h1>
			<h2>
				A carefully crafted series of stunning canvas art prints printed on
				Hahnemühle Canvas, created with intention by contemporary artists who
				explore the quiet poetry of everyday life. Each work embodies the
				essence of being through a harmonious blend of color, texture, and
				feeling: a fusion of painting, illustration and design. The pieces
				balance nostalgia with a distinctly modern sensibility, transforming
				ordinary rooms into vibrant expressions of style and creativity.
			</h2>
			<Banner />
			<PostersList posters={posters} />
		</div>
	);
};

export default PostersDetailsPage;
