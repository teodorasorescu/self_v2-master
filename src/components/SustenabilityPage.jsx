import styles from '../styling/sustenability.page.module.scss';

const SustenabilityPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}></div>
			<div className={styles.text}>
				<h3>
					<b>SUSTAINABILITY</b>
				</h3>
				<p className={styles.subheadline}>
					The <b>frames</b> are made from 100% FSC-certified natural wood,
					meaning the wood comes from forest-friendly sources that are
					responsibly managed. Additionally, the <b>tubes</b> and <b>boxes</b>{' '}
					used to deliver the canvas artworks are made from cardboard, thus
					supporting the use of eco-friendly, non-plastic materials. The use of
					high-quality materials is essential to Self Posters, as the aim is for
					the products to be durable and maintain their appearance over time.
					Therefore, printing is done on <b>100% cotton canvas</b>.
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

			<div className={styles.text}>
				<h4>
					<b>FOREST STEWARDSHIP COUNCIL® (FSC®)</b>
				</h4>

				<p className={styles.subheadline}>
					The Forest Stewardship Council® (FSC®) is a global, non-profit
					organization dedicated to promoting responsible forest management.
					FSC® defines standards based on agreed principles for responsible
					forest management, supported by environmental, social, and economic
					stakeholders. FSC® helps care for forests, people, and wildlife.
					<p className={styles.italic}>
						<a href='https://fsc.org/en'>
							To learn more about the Forest Stewardship Council®, visit
							www.fsc.org
						</a>
					</p>
					Since most of our products are made from wood, obtaining FSC®
					certification is crucial for us. More importantly, by choosing FSC®
					certified products, customers support the responsible management of
					the world’s forests.
				</p>
			</div>
		</div>
	);
};

export default SustenabilityPage;
