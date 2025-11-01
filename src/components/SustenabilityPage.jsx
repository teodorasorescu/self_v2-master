import styles from '../styling/sustenability.page.module.scss';

const SustenabilityPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h3>
					<b>SUSTAINABILITY</b>
				</h3>
				<p className={styles.subheadline}>
					All prints are made-to-order, printed only when purchased to minimize
					waste and support sustainable practices. <br />
					Additionally, the <b>tubes</b> and <b>boxes</b> used to deliver the
					canvas artworks are made from cardboard, thus supporting the use of
					eco-friendly, non-plastic materials. The digital or painted artworks
					are printed on a high-quality canvas material produced by{' '}
					<b>Hahnemühle</b>, a German manufacturer known worldwide for premium
					fine-art papers and canvases. The canvas is acid-free and lignin-free,
					which prevents yellowing over time. It is typically archival quality,
					meaning it can last 60–100+ years if properly cared for.
					<br /> <br />
					Moreover, the <b>tubes</b> are made from high-quality cardboard that
					can easily be recycled multiple times. The tube manufacturers have
					reduced pollution in the processing of these tubes by 95% by reusing
					fiber. They have a quality management system in accordance with ISO
					9001 standards, an environmental management system ISO 14001, and an
					occupational health and safety management system ISO 45001.
					<br /> <br />
					In the future, Self Posters hopes to intensify efforts in this
					direction by exploring new ways to reduce environmental impact and
					promote an eco-friendly lifestyle. Unfortunately, the packaging of the
					artworks is not entirely ecological yet, but we aim to reach a higher
					level of sustainability by replacing plastic elements (bubble wrap,
					bags, tapes).
				</p>
			</div>
		</div>
	);
};

export default SustenabilityPage;
