import '../styling/showcase.css';
export const Showcase = ({ jpg }) => {
	return (
		<section className='section-houses'>
			<div className='houses-showcase'>
				{jpg.map((el) => {
					return (
						<img
							className='photo'
							src={el.image}
							alt='Inspiratie Tablouri Gradient Design Interior Contemporan'
							key={Math.random() * 101}
							width={'40%'}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Showcase;
