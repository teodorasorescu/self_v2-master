import React, { useState } from 'react';
import '../styling/flipcard.css';
import Mind from '../images/mind.jpg';
import Soul from '../images/soul.jpg';
import Body from '../images/body.jpg';
import { useSelector } from 'react-redux';
import { selectProduct } from '../reducers/productSlice';
import { productMind } from '../images/mind_buy.jpg';
import { productBody } from '../images/body_buy.jpg';
import { productSoul } from '../images/Soul_Buy.jpg';
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

		// console.log('image, title, descrp: ' + image + title);
		dispatch(loadProduct(product));
	};

	return (
		<div class='box-container'>
			<div class='box-item'>
				<div class='flip-box'>
					<div
						class='flip-box-front text-center'
						style={{ backgroundImage: `url(${Mind})` }}
					>
						<div class='inner color-white'></div>
					</div>
					<div
						class='flip-box-back text-center'
						style={{ backgroundImage: `url(${Mind})` }}
					>
						<div class='inner color-white'>
							<h3 class='flip-box-header'>"Foarte frumos"</h3>
							{/* <p>A short sentence describing this callout is.</p> */}
							<Link to='alegeculorile'>
								<button
									class='flip-box-button'
									onClick={() =>
										computeProduct(
											'mind_buy.jpg',
											'MIND',
											'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.'
										)
									}
								>
									Personalizeaza-ti tabloul
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
			<div class='box-item'>
				<div class='flip-box'>
					<div
						class='flip-box-front text-center'
						style={{ backgroundImage: `url(${Soul})` }}
					>
						<div class='inner color-white'></div>
					</div>
					<div
						class='flip-box-back text-center'
						style={{ backgroundImage: `url(${Soul})` }}
					>
						<div class='inner color-white'>
							<h3 class='flip-box-header'>"Foarte frumos"</h3>
							{/* <p>A short sentence describing this callout is.</p> */}
							<Link to='alegeculorile'>
								<button
									class='flip-box-button'
									onClick={() =>
										computeProduct(
											'Soul_Buy.jpg',
											'SOUL',
											'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.'
										)
									}
								>
									Personalizeaza-ti tabloul
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
			<div class='box-item'>
				<div class='flip-box'>
					<div
						class='flip-box-front text-center'
						style={{ backgroundImage: `url(${Body})` }}
					>
						<div class='inner color-white'></div>
					</div>
					<div
						class='flip-box-back text-center'
						style={{ backgroundImage: `url(${Body})` }}
					>
						<div class='inner color-white'>
							<h3 class='flip-box-header'>"Foarte frumos"</h3>
							{/* <p>A short sentence describing this callout is.</p> */}
							<Link to='alegeculorile'>
								<button
									onClick={() =>
										computeProduct(
											'body_buy.jpg',
											'BODY',
											'Adu-ți întreaga atenție și conștientizare asupra senzatiilor pe care le observi în corpul tău si incearca sa exprimi prin culori sentimentele fata de acesta. Ex: Iubire, recunostinta, vindecare. Fie ca te raportezi la ceea ce simti sau ai vrea sa simti.'
										)
									}
									class='flip-box-button'
								>
									Personalizeaza-ti tabloul
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
