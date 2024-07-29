import React, { useEffect } from 'react';
import '../styling/flipcard.css';
import Mind from '../images/mind.webp';
import Soul from '../images/soul.webp';
import Body from '../images/body.webp';

import { useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '../reducers/slices/productSlice';
import { Link } from 'react-router-dom';
import RoundIcon from '../images/round-arrow.webp';
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
						style={{ backgroundImage: `url(${Body})` }}
					>
						<div className='inner color-white'></div>
						<div className='roundIconContainer'>
							<img
								src={RoundIcon}
								alt='Intoarce cardul si personalizeaza-ti tabloul gradient canvas'
							/>
						</div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Body})` }}
					>
						<div className='inner color-white'>
							{postersStock === 0 ? (
								<button className='flip-box-button'>Stoc epuizat</button>
							) : (
								<Link to='/personalizare'>
									<button
										onClick={() =>
											computeProduct(
												'body_buy.webp',
												'BODY',
												'Adu-ți întreaga atenție asupra corpului tău. Devin-o conștient asupra emoțiilor și senzațiilor pe care le simți și eliberează orice tensiune fizică care crezi că este conectată cu starea ta emoțională. Analizează-ți semnalele interne și imaginează-ți că ești înconjurat de o aură plină de culori. Transpune în tabloul tău culorile și sentimentele pe care le-ai experimentat.',
												'NOURISH YOUR BODY'
											)
										}
										className='flip-box-button'
									>
										Personalizează tablou{' '}
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%', fontSize: 'large' }}>
					Tablou Canvas Personalizat <br />
					BODY{' '}
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>{priceValue}</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${Mind})` }}
					>
						<div className='inner color-white'></div>
						<div className='roundIconContainer'>
							<img
								src={RoundIcon}
								alt='Intoarce cardul si personalizeaza-ti tabloul gradient canvas'
							/>
						</div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Mind})` }}
					>
						<div className='inner color-white'>
							{postersStock === 0 ? (
								<button className='flip-box-button'>Stoc epuizat</button>
							) : (
								<Link to='/personalizare'>
									<button
										className='flip-box-button'
										onClick={() =>
											computeProduct(
												'mind_buy.webp',
												'MIND',
												'Adu-ți întreaga atenție către mintea ta. Începe să te observi și găsește o asociere între gândurile și sentimentele tale. Acceptă-le și încearcă să-ți imaginezi că te afli în siguranță, într-o cameră emoțională. Fă loc pentru toate emoțiile, fie pozitive, fie negative. Relaxează-te și oferă-ți timp pentru a transpune orice sentiment în culori.',
												'OPEN YOUR MIND'
											)
										}
									>
										Personalizează tablou
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%', fontSize: 'large' }}>
					Tablou Canvas Personalizat <br />
					MIND
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>{priceValue}</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${Soul})` }}
					>
						<div className='inner color-white'></div>
						<div className='roundIconContainer'>
							<img
								src={RoundIcon}
								alt='Intoarce cardul si personalizeaza-ti tabloul gradient canvas'
							/>
						</div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${Soul})` }}
					>
						<div className='inner color-white'>
							{postersStock === 0 ? (
								<button className='flip-box-button'>Stoc epuizat</button>
							) : (
								<Link to='/personalizare'>
									<button
										className='flip-box-button'
										onClick={() =>
											computeProduct(
												'Soul_Buy.webp',
												'SOUL',
												'Adu-ți întreaga atenție către sufletul tău. Eliberează-ți mintea de gânduri și dă-i voie sufletului tău să vorbească. Permite emoțiilor ce apar să fie eliberate și să creeze claritate și lumină. Conectează-te profund la aspectele ființei tale și simte unitatea dintre sufletul tău și divin. Imaginează-ți că ești într-o călătorie de autocunoaștere și transpune-te într-un univers plin de culori și trăiri.',
												'FOLLOW YOUR SOUL'
											)
										}
									>
										Personalizează tablou{' '}
									</button>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p style={{ fontStyle: 'italic', paddingTop: '1%', fontSize: 'large' }}>
					Tablou Canvas Personalizat <br /> SOUL
				</p>
				<p style={{ fontSize: 'large', fontWeight: 600 }}>{priceValue}</p>
			</div>
		</div>
	);
};

export default Flipcard;
