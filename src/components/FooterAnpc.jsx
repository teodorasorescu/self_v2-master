import styles from '../styling/footer.module.scss';
import { S3_BUCKET } from '../constants/links';

const anpcSalImg = S3_BUCKET + '/anpcsal.webp';
const anpcSolImg = S3_BUCKET + '/anpcsol.webp';

const FooterAnpc = () => {
	return (
		<div className={styles.anpcContainer}>
			<a href='https://anpc.ro/ce-este-sal/' rel='noopener'>
				{' '}
				<img src={anpcSalImg} alt='anpc-sal' />
			</a>{' '}
			<a />
			<a href='https://ec.europa.eu/consumers/odr' rel='noopener'>
				{' '}
				<img src={anpcSolImg} alt='anpc-sal' />
			</a>{' '}
			<a />
		</div>
	);
};
export default FooterAnpc;
