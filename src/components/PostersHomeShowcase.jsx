import React from 'react';
import '../styling/inspoHome.css';
import PosterItem from './PosterItem';

export const PostersHomeShowcase = ({ posters }) => {
	return (
		<div className='gradientPhotosContainer'>
			<h3 className='text'>NEW POSTERS</h3>
			<div className='imagesContainer'>
				{posters.map((poster) => (
					<div key={poster.urlTitle} className='imgItem'>
						<a href={`/posters/${poster.urlTitle}`}>
							<PosterItem poster={poster} className='imgBox' />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default PostersHomeShowcase;
