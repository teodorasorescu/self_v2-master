import React, { useEffect } from 'react';
import '../styling/flipcard.css';
import Mind from '../images/mind.png';
import MindFrame from '../images/mind_buy.jpg';

import Soul from '../images/soul.png';
import SoulFrame from '../images/Soul_Buy.jpg';
import Body from '../images/body.png';
import BodyFrame from '../images/body_buy.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '../reducers/slices/productSlice';
import { Link } from 'react-router-dom';
import RoundIcon from '../images/round-arrow.png';
import { price } from '../constants/productConstants';
import { selectPostersStock } from '../reducers/slices/stockSlice';
import getPostersStockAction from '../reducers/actions/getPostersStockAction';

const Flipcard = () => {
	const dispatch = useDispatch();

	const priceValue = price.toFixed(2) + ' lei';
	const computeProduct = (image, title, description, subtitle) => {
		const product = {
			price: price,
			image: image,
			title: title,
			description: description,
			subtitle: subtitle,
		};

		dispatch(loadProduct(product));
	};

	const postersStock = useSelector(selectPostersStock);
	useEffect(() => {
		getPostersStockAction(dispatch);
	}, []);

	//useEffect and check if is the stock,
	// if yes than personalizare msg , else stop epuizat msg
	return (
		<div className='box-container'>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${MindFrame})` }}
					>
						<div className='inner color-white'></div>
						<div className='roundIconContainer'>
							<img src={RoundIcon} alt='roundIcon' />
						</div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Mind})` }}
					>
						<div className='inner color-white'>
							{postersStock == 0 ? (
								<button className='flip-box-button'>Stoc epuizat</button>
							) : (
								<Link to='/personalizare'>
									<button
										className='flip-box-button'
										onClick={() =>
											computeProduct(
												'mind_buy.jpg',
												'MIND',
												'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.',
												'OPEN YOUR MIND'
											)
										}
									>
										Personalizează poster
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%', fontSize: 'large' }}>
					Poster canvas personalizat <br />
					MIND
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>{priceValue}</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${SoulFrame})` }}
					>
						<div className='inner color-white'></div>
						<div className='roundIconContainer'>
							<img src={RoundIcon} alt='roundIcon' />
						</div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Soul})` }}
					>
						<div className='inner color-white'>
							{postersStock == 0 ? (
								<button className='flip-box-button'>Stoc epuizat</button>
							) : (
								<Link to='/personalizare'>
									<button
										className='flip-box-button'
										onClick={() =>
											computeProduct(
												'Soul_Buy.jpg',
												'SOUL',
												'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.',
												'FOLLOW YOUR SOUL'
											)
										}
									>
										Personalizează poster{' '}
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%', fontSize: 'large' }}>
					Poster canvas personalizat <br /> SOUL
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>{priceValue}</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${BodyFrame})` }}
					>
						<div className='inner color-white'></div>
						<div className='roundIconContainer'>
							<img src={RoundIcon} alt='roundIcon' />
						</div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Body})` }}
					>
						<div className='inner color-white'>
							{postersStock == 0 ? (
								<button className='flip-box-button'>Stoc epuizat</button>
							) : (
								<Link to='/personalizare'>
									<button
										onClick={() =>
											computeProduct(
												'body_buy.jpg',
												'BODY',
												'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.',
												'NOURISH YOUR BODY'
											)
										}
										className='flip-box-button'
									>
										Personalizează poster{' '}
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%', fontSize: 'large' }}>
					Poster canvas personalizat <br />
					BODY{' '}
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>{priceValue}</p>
			</div>
		</div>
	);
};

export default Flipcard;
