import { Link } from 'react-router-dom';
import styles from '../styling/footer.category.module.scss';

const FooterCategory = ({ title, categories }) => {
	return (
		<div className={styles.container}>
			<h5>{title}</h5>
			{categories.map((c, i) => {
				return (
					<div key={i}>
						<Link className={styles.category} to={c.link}>
							{c.name}
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default FooterCategory;
