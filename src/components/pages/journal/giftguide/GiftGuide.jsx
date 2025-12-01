import { useEffect } from 'react';
import classes from './gift.guide.module.scss';
import ProductItem from '../../../features/products/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosters } from '../../../../reducers/slices/postersSlice';
import getPostersAction from '../../../../reducers/actions/getPostersAction';

import { S3_BUCKET } from '../../../../constants/links';

const GiftGuide = () => {
	const dispatch = useDispatch();
	const storedPosters = useSelector(selectPosters);
	const giftPhoto = S3_BUCKET + '/giftGuide.png';
	useEffect(() => {
		if (storedPosters.length === 0) {
			getPostersAction(dispatch);
		}
	}, [dispatch]);

	const filter = (n1, n2) => {
		return storedPosters.filter(
			(poster) => poster.title === n1 || poster.title === n2
		);
	};

	return (
		<div className={classes.container}>
			<h1>Holiday Gift Guide</h1>
			<h2>
				Get inspired with a selection of our favourite posters to gift your
				loved ones, including yourself, during the holiday season.
			</h2>
			<img src={giftPhoto} alt='christmas tree' />
			<>
				<h4>for the</h4>
				<h1>Bedroom</h1>

				<div className={classes.postersList}>
					{filter('Peonies', '003').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
				<div className={classes.postersList}>
					{filter('001', 'Milan').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
				<div className={classes.postersList}>
					{filter('Self Love', `Le Cardigan Gourmand`).map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
			<>
				<h4>for the</h4>
				<h1>Kitchen</h1>

				<div className={classes.postersList}>
					{filter('Cinnamon Rolls', 'Cozonac').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>

				<div className={classes.postersList}>
					{filter('Day by Day', 'Obor Mercado').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
				<div className={classes.postersList}>
					{filter('Hai acasă la sarmale!').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
			<>
				<h4>for the</h4>
				<h1>Coffee / Matcha Station</h1>

				<div className={classes.postersList}>
					{filter('Sip Between the Lines', 'Budapest').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
				<div className={classes.postersList}>
					{filter('Matcha, Please!', "I've made you coffee").map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>

			<>
				<h4>for the</h4>
				<h1>Living Room</h1>

				<div className={classes.postersList}>
					{filter('Girls night at my place ||', 'The Blue Hour').map(
						(poster) => (
							<div key={poster.urlTitle} className={classes.poster}>
								<a href={`/canvas-art-prints/${poster.urlTitle}`}>
									<ProductItem product={poster} posterImg={poster.imgTitle} />
								</a>
							</div>
						)
					)}
				</div>
				<div className={classes.postersList}>
					{filter('Morning in Stillness', 'A table for two, please!').map(
						(poster) => (
							<div key={poster.urlTitle} className={classes.poster}>
								<a href={`/canvas-art-prints/${poster.urlTitle}`}>
									<ProductItem product={poster} posterImg={poster.imgTitle} />
								</a>
							</div>
						)
					)}
				</div>
				<div className={classes.postersList}>
					{filter('Definitely a Pisces', 'OOTD').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
			<>
				<h4>for the</h4>
				<h1>Hallway</h1>

				<div className={classes.postersList}>
					{filter('Where She Stood', 'Mes Tabi').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
				<div className={classes.postersList}>
					{filter('Le Joyeux Trench-Coat').map((poster) => (
						<div key={poster.urlTitle} className={classes.poster}>
							<a href={`/canvas-art-prints/${poster.urlTitle}`}>
								<ProductItem product={poster} posterImg={poster.imgTitle} />
							</a>
						</div>
					))}
				</div>
			</>
		</div>
	);
};

export default GiftGuide;
