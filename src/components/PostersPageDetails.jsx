import { React } from 'react';
import classes from '../styling/posters.page.details.module.scss';
import PosterItem from './PosterItem';

const PostersPageDetails = ({ posters }) => {
	return (
		<div className={classes.container}>
			<h1>Posters</h1>
			<h2>
				A carefully crafted series of 152 original art prints. Every piece in
				the collection has been created with intention, embodying the essence of
				the season through a harmonious blend of fall colors, textures, and
				shapes.
			</h2>
			<div className={classes.postersList}>
				{posters.map((poster) => (
					<div key={poster.urlTitle} className={classes.poster}>
						<a href={`/posters/${poster.urlTitle}`}>
							<PosterItem poster={poster} />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostersPageDetails;
