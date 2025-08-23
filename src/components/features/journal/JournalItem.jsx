import classes from './journal.item.module.scss';
import { S3_BUCKET } from '../../../constants/links.js';

const JournalItem = ({ article }) => {
	const imgTitle = S3_BUCKET + '/' + article.imgTitle;

	return (
		<div className={classes.container}>
			<div className={classes.pictureContainer}>
				<img
					src={imgTitle}
					alt={article.altDescription}
					style={{ objectFit: 'cover', width: '100%', height: '100%' }}
				/>
			</div>

			<div className={classes.textContainer}>
				<h3>{article.title}</h3>
				<h4 className={classes.desc}>{article.description}</h4>
				<h4>{article.date}</h4>
			</div>
		</div>
	);
};

export default JournalItem;
