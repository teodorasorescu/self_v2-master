import React, { useEffect } from 'react';
import '../styling/flipcard.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct, selectProduct } from '../reducers/slices/productSlice';
import { Link } from 'react-router-dom';
import { price } from '../constants/productConstants';
import { selectPostersStock } from '../reducers/slices/stockSlice';
import getPostersStockAction from '../reducers/actions/getPostersStockAction';
import ReactGA from 'react-ga4';
import { S3_BUCKET } from '../constants/links';
import Button from './ui/button/Button';

const mind = S3_BUCKET + '/mind.webp';
const soul = S3_BUCKET + '/soul.webp';
const body = S3_BUCKET + '/body.webp';

const Flipcard = () => {
	const dispatch = useDispatch();
	const product = useSelector(selectProduct);

	const priceValue = price.toFixed(2) + ' lei';
	const computeProduct = (image, title, description, subtitle) => {
		ReactGA.event('button_click', {
			button_label: 'Personalizeaza home buton',
		});

		const updatedProduct = {
			...product,
			price: price,
			image: image,
			title: title,
			description: description,
			subtitle: subtitle,
		};

		dispatch(loadProduct(updatedProduct));
	};

	const postersStock = useSelector(selectPostersStock);
	useEffect(() => {
		getPostersStockAction(dispatch);
		ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
	}, []);

	//useEffect and check if is the stock,
	// if yes than personalizare msg , else stop epuizat msg

	return (
		<div className='box-container'>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${body})` }}
					>
						<div className='inner color-white'></div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${body})` }}
					>
						<div className='inner color-white'>
							{postersStock === 0 ? (
								<Button style='flip-box-button' msg='Stoc epuizat' />
							) : (
								<Link to='/personalizare'>
									<Button
										onClick={() =>
											computeProduct(
												'body_buy.webp',
												'BODY',
												'Adu-ți întreaga atenție asupra corpului tău. Devin-o conștient asupra emoțiilor și senzațiilor pe care le simți și eliberează orice tensiune fizică care crezi că este conectată cu starea ta emoțională. Analizează-ți semnalele interne și imaginează-ți că ești înconjurat de o aură plină de culori. Transpune în tabloul tău culorile și sentimentele pe care le-ai experimentat.',
												'NOURISH YOUR BODY'
											)
										}
										msg={'Personalizează tablou'}
										style='flip-box-button'
									/>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p className='textContainer'>
					Tablou Canvas Personalizat <br />
					BODY{' '}
				</p>
				<p className='priceContainer'>{'From ' + priceValue}</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${mind})` }}
					>
						<div className='inner color-white'></div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${mind})` }}
					>
						<div className='inner color-white'>
							{postersStock === 0 ? (
								<Button style='flip-box-button' msg='Stoc epuizat' />
							) : (
								<Link to='/personalizare'>
									<Button
										onClick={() =>
											computeProduct(
												'mind_buy.webp',
												'Tablou Canvas MIND',
												'Adu-ți întreaga atenție către mintea ta. Începe să te observi și găsește o asociere între gândurile și sentimentele tale. Acceptă-le și încearcă să-ți imaginezi că te afli în siguranță, într-o cameră emoțională. Fă loc pentru toate emoțiile, fie pozitive, fie negative. Relaxează-te și oferă-ți timp pentru a transpune orice sentiment în culori.',
												'OPEN YOUR MIND'
											)
										}
										msg={'Personalizează tablou'}
										style='flip-box-button'
									/>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p className='textContainer'>
					Tablou Canvas Personalizat <br />
					MIND
				</p>
				<p className='priceContainer'>{'From ' + priceValue}</p>
			</div>
			<div className='box-item'>
				<div className='flip-box'>
					<div
						className='flip-box-front text-center'
						style={{ backgroundImage: `url(${soul})` }}
					>
						<div className='inner color-white'></div>
					</div>
					<div
						className='flip-box-back text-center'
						style={{ backgroundImage: `url(${soul})` }}
					>
						<div className='inner color-white'>
							{postersStock === 0 ? (
								<Button style='flip-box-button' msg='Stoc epuizat' />
							) : (
								<Link to='/personalizare'>
									<Button
										onClick={() =>
											computeProduct(
												'Soul_Buy.webp',
												'SOUL',
												'Adu-ți întreaga atenție către sufletul tău. Eliberează-ți mintea de gânduri și dă-i voie sufletului tău să vorbească. Permite emoțiilor ce apar să fie eliberate și să creeze claritate și lumină. Conectează-te profund la aspectele ființei tale și simte unitatea dintre sufletul tău și divin. Imaginează-ți că ești într-o călătorie de autocunoaștere și transpune-te într-un univers plin de culori și trăiri.',
												'FOLLOW YOUR SOUL'
											)
										}
										msg={'Personalizează tablou'}
										style='flip-box-button'
									/>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p className='textContainer'>
					Tablou Canvas Personalizat <br /> SOUL
				</p>
				<p className='priceContainer'>{'From ' + priceValue}</p>
			</div>
		</div>
	);
};

export default Flipcard;
