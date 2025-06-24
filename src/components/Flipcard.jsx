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
import { useCountry } from '../contexts/CountryProvider';
import { getLocalizedPrice } from '../constants/utils';

const mind = S3_BUCKET + '/mind.webp';
const soul = S3_BUCKET + '/soul.webp';
const body = S3_BUCKET + '/body.webp';

const Flipcard = () => {
	const dispatch = useDispatch();
	const product = useSelector(selectProduct);
	const { countryCode } = useCountry();
	const computedPrice = getLocalizedPrice(price, countryCode);
	const priceValue =
		computedPrice.price.toFixed(1) + ' ' + computedPrice.currency;

	const computeProduct = (image, title, customTitle, description, subtitle) => {
		ReactGA.event('button_click', {
			button_label: 'Personalizeaza home buton',
		});

		const updatedProduct = {
			...product,
			price: price,
			image: image,
			title: title,
			customTitle: customTitle,
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
								<Link to='/customization'>
									<Button
										onClick={() =>
											computeProduct(
												'body_buy.webp',
												'Body Aura Poster',
												'BODY',
												'Bring your full attention to your body. Become aware of the emotions and sensations you feel and release any physical tension you believe is connected to your emotional state. Analyze your internal signals and imagine yourself surrounded by an aura full of colors. Translate into your artwork the colors and feelings you experienced.',
												'NOURISH YOUR BODY'
											)
										}
										msg={'Custom Body Aura'}
										style='flip-box-button'
									/>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p className='textContainer'>
					Canvas Artwork <br />
					BODY{' '}
				</p>
				<p className='priceContainer'>From {priceValue}</p>{' '}
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
								<Link to='/customization'>
									<Button
										onClick={() =>
											computeProduct(
												'mind_buy.webp',
												'Mind Aura Poster',
												'MIND',
												'Bring your full attention to your mind. Begin to observe yourself and find an association between your thoughts and feelings. Accept them and try to imagine yourself being safe in an emotional room. Make room for all emotions, whether positive or negative. Relax and give yourself time to translate any feeling into colors.',
												'OPEN YOUR MIND'
											)
										}
										msg={'Custom Mind Aura'}
										style='flip-box-button'
									/>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p className='textContainer'>
					Canvas Artwork <br />
					MIND{' '}
				</p>
				<p className='priceContainer'>From {priceValue}</p>{' '}
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
								<Link to='/customization'>
									<Button
										onClick={() =>
											computeProduct(
												'Soul_Buy.webp',
												'Soul Aura Poster',
												'SOUL',
												'Bring your full attention to your soul. Free your mind from thoughts and let your soul speak. Allow emerging emotions to be released and create clarity and light. Connect deeply with aspects of your being and feel the unity between your soul and the divine. Imagine yourself on a journey of self-discovery and translate yourself into a universe full of colors and experiences.',
												'FOLLOW YOUR SOUL'
											)
										}
										msg={'Custom Soul Aura'}
										style='flip-box-button'
									/>
								</Link>
							)}
						</div>
					</div>
				</div>
				<p className='textContainer'>
					Canvas Artwork <br />
					SOUL{' '}
				</p>
				<p className='priceContainer'>From {priceValue}</p>{' '}
			</div>
		</div>
	);
};

export default Flipcard;
