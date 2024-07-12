import styles from '../styling/product.info.module.scss';
import Posters from '../images/posters.webp';
import { headline } from '../constants/meditationTips';
import { meditationTips } from '../constants/meditationTips';

const ProductInfo = () => {
	return (
		<div className={styles.container}>
			<h3>{headline}</h3>
			{meditationTips.map((m, i) => {
				return (
					<div className={styles.meditation} key={i}>
						<p className={styles.title}>
							<b>{m.title}</b>
						</p>
						<p>{m.desc}</p>
					</div>
				);
			})}
			<img src={Posters} alt='Set Body Mind Soul, tablouri personalizate' />
		</div>
	);
};

export default ProductInfo;
