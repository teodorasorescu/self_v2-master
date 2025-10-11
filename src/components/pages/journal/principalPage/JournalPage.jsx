import classes from './journal.page.module.scss';
import JournalItem from '../../../features/journal/JournalItem';
import { articles } from '../../../../constants/articles';

const JournalPage = () => {
	return (
		<div className={classes.container}>
			<h1>We're updating our website, but in the meantime, have a read!🤓</h1>
			<div className={classes.articlesList}>
				{articles.map((article, index) => (
					<div key={index} className={classes.article}>
						<a
							href={`/journal/${article.urlTitle}`}
							aria-label={`Read more about ${article.title}`}
						>
							<JournalItem article={article} />
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default JournalPage;
