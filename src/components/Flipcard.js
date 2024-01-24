import React from 'react';
import '../styling/flipcard.css';
import Mind from '../images/mind.png';
import Soul from '../images/soul.png';
import Body from '../images/body.png';
import { useDispatch } from 'react-redux';
import { loadProduct } from '../reducers/productSlice';
import { Link } from 'react-router-dom';

const Flipcard = () => {
	const dispatch = useDispatch();

	const computeProduct = (image, title, description) => {
		const product = {
			price: '120,00 lei',
			image: image,
			title: title,
			description: description,
		};

		dispatch(loadProduct(product));
	};

	return (
		<div className='box-container'>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${Mind})` }}
					>
						<div className='inner color-white'></div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Mind})` }}
					>
						<div className='inner color-white'>
							<Link to='alegeculorile'>
								<button
									className='flip-box-button'
									onClick={() =>
										computeProduct(
											'mind_buy.jpg',
											'MIND',
											'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.'
										)
									}
								>
									Personalizează tabloul
								</button>
							</Link>
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%' }}>
					Tablou personalizat MIND <br />
					Ramă lemn - dimensiune 30x40cm
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>120 lei</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${Soul})` }}
					>
						<div className='inner color-white'></div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Soul})` }}
					>
						<div className='inner color-white'>
							<Link to='alegeculorile'>
								<button
									className='flip-box-button'
									onClick={() =>
										computeProduct(
											'Soul_Buy.jpg',
											'SOUL',
											'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.'
										)
									}
								>
									Personalizează tabloul
								</button>
							</Link>
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%' }}>
					Tablou personalizat SOUL <br />
					Ramă lemn - dimensiune 30x40cm
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>120 lei</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${Body})` }}
					>
						<div className='inner color-white'></div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Body})` }}
					>
						<div className='inner color-white'>
							{/* <h3 className='flip-box-header'>"Foarte frumos"</h3> */}
							<Link to='alegeculorile'>
								<button
									onClick={() =>
										computeProduct(
											'body_buy.jpg',
											'BODY',
											'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.'
										)
									}
									className='flip-box-button'
								>
									Personalizează tabloul
								</button>
							</Link>
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%' }}>
					Tablou personalizat BODY <br />
					Ramă lemn - dimensiune 30x40cm
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>120 lei</p>
			</div>
		</div>
	);
};

export default Flipcard;
