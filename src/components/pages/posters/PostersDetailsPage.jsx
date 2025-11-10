import benefits from '../../../constants/benefits';
import classes from '../../../styling/posters.page.details.module.scss';
import PostersList from '../../features/postersList/PostersList';
import Banner from '../../ui/banner/Banner';

const PostersDetailsPage = ({ posters }) => {
	return (
		<div className={classes.container}>
			<div className={classes.banner}>
				<div className={classes.subBanner}>
					<h1>The Biggest and Only Sale of the Year</h1>
					<h2>35% OFF EVERYTHING + FREE DELIVERY</h2>
				</div>

				<>
					{benefits.map((c, i) => (
						<div key={i} className={classes.benefits}>
							<h2>{c.title}</h2>
							<p>{c.desc}</p>
						</div>
					))}
				</>
			</div>

			{/* <h2>
				A carefully crafted series of stunning canvas art prints printed on
				Hahnemühle Canvas, created with intention by contemporary artists who
				explore the quiet poetry of everyday life. Each work embodies the
				essence of being through a harmonious blend of color, texture, and
				feeling: a fusion of painting, illustration and design. The pieces
				balance nostalgia with a distinctly modern sensibility, transforming
				ordinary rooms into vibrant expressions of style and creativity.
			</h2> */}
			<PostersList posters={posters} />
			<Banner />
		</div>
	);
};

export default PostersDetailsPage;
