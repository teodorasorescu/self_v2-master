import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '../styling/addProduct.css';
import { selectPoster } from '../reducers/slices/posterSlice';
import getPosterByUrlTitle from '../reducers/actions/getPosterByUrlTitle';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { useParams } from 'react-router-dom';
import { updatePrice } from '../constants/utils';
import '../styling/addProduct.css';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { frameColors, framePrice } from '../constants/frameColors';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import FrameAndChassisSelect from './FrameAndChassisSelect';
import { chassisPrice, details, suport } from '../constants/productConstants';
import PostersCarousel from './PostersCarousel';
import ReactGA from 'react-ga4';

import useMediaQuery from '@mui/material/useMediaQuery';

const PosterDetailsPage = ({ poster }) => {
	const [frameColor, setFrameColor] = useState('fără');
	const [chassis, setChassis] = useState(false);
	const { itemCount, setItemCount } = useStateContext();

	const [finalPrice, setFinalPrice] = useState(poster.price);
	const width = useMediaQuery('(max-width:1023px)') ? '90vw' : '25vw';

	const localStoreProducts = localStorage.getItem('products');

	let storedProducts = [];
	if (localStoreProducts != []) {
		storedProducts = JSON.parse(localStoreProducts);
	} else {
		storedProducts = localStoreProducts;
	}

	const discountCodeValue = parseInt(localStorage.getItem('discountValue'), 10);

	const computeProductCart = () => {
		ReactGA.event('button_click', {
			button_label: 'Adauga produs buton',
		});

		// const finalProduct = computeProduct(
		// 	product,
		// 	finalPrice,
		// 	discountCodeValue,
		// 	frameColor,
		// 	chassis
		// );
		// const productsList = [...storedProducts, finalProduct];
		// dispatch(loadProducts(productsList));

		setItemCount(
			Math.max(Number.parseInt(localStorage.getItem('itemCount')) + 1, 0)
		);
	};

	useEffect(() => {
		setFinalPrice(updatePrice(poster, frameColor, chassis));
	}, [frameColor, chassis]);

	return (
		<div className='bodyContainer'>
			<div className='secondContainer'>
				<div className='carouselContainer'>
					<PostersCarousel poster={poster} altDescription='' />
				</div>
				<div className='introductionContainer'>
					<div className='titleContainer'>
						<h1>{poster.title}</h1>
						<h2>{finalPrice.toFixed(2) + ' lei'}</h2>
					</div>

					<FrameAndChassisSelect
						frameColor={frameColor}
						chassis={chassis}
						setChassis={setChassis}
						setFrameColor={setFrameColor}
					/>

					<div className='addToCartContainer'>
						<a href='/cos-de-cumparaturi'>
							<Button className='cartButton' onClick={computeProductCart}>
								ADAUGĂ ÎN COȘ
							</Button>
						</a>
					</div>

					<div className='detailsDropdownContainer'>
						<Dropdown
							title='DETALII'
							content={details}
							dropdownWidth={width}
							value={true}
						/>
						<Dropdown
							title='SUPORT'
							content={suport}
							dropdownWidth={width}
							value={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PosterDetailsPage;
