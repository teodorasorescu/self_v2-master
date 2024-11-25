import styles from '../styling/sub.header.module.scss';

const Subheader = ({ headline, topics }) => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1>{headline}</h1>

				{topics.map((t, i) => {
					return (
						<div key={i}>
							<a className={styles.subheadline} href={t.path}>
								{' '}
								<h2>{t.name}</h2>{' '}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Subheader;
