import { React } from 'react';
import classes from './journal.item.module.scss';
import { S3_BUCKET } from '../../../constants/links.js';
import Image from './giftguide.webp';
const JournalItem = ({ article }) => {
	// const imgTitle = S3_BUCKET + '/' + item.imgTitle;

	return (
		<div className={classes.container}>
			<img
				src={Image}
				className={classes.pictureContainer}
				alt={article.altDescription}
			/>
			<div className={classes.textContainer}>
				<h3>{article.title}</h3>
				<h4 className={classes.desc}>{article.description}</h4>
				<h4>{article.date}</h4>
			</div>
		</div>
	);
};

export default JournalItem;
