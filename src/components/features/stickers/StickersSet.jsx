import { React } from 'react';
import classes from './posters.group.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductItem from '../products/ProductItem';

const StickersSet = ({ stickers }) => {
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	return (
		<div className={classes.container}>
			<h3>Sticker Sheets</h3>
			<div className={classes.postersList}>
				{stickers.map((s, index) => (
					<div
						key={s.urlTitle}
						className={classes.poster}
						style={{ '--delay': index }}
					>
						<a href={`/sticker-sheets/${s.urlTitle}`}>
							<ProductItem
								product={s}
								posterImg={smartphoneScreen ? s.imgTitle : s.imgTitlePosterList}
								hasHoverImg={true}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default StickersSet;
