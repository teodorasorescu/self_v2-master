import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import { computeDiscount, updatePrice } from '../../../constants/utils';
import classes from './poster.page.module.scss';
import { useStateContext } from '../../../contexts/ContextProvider';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from '../../Dropdown';
import FrameAndChassisSelect from '../../FrameAndChassisSelect';
import ItemImagesCarousel from '../../features/products/ItemImagesCarousel';
import ReactGA from 'react-ga4';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../../reducers/slices/productsSlice';

const ProductInfoPage = ({ product, suport, details }) => {
	const [frameColor, setFrameColor] = useState('fără');
	const [chassis, setChassis] = useState(false);
	const { itemCount, setItemCount } = useStateContext();

	const [finalPrice, setFinalPrice] = useState(product.price);
	const width = useMediaQuery('(max-width:1023px)') ? '90vw' : '25vw';
	const dispatch = useDispatch();
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

		const finalProduct = {
			id: product.id,
			initialPrice: finalPrice,
			quantity: 1,
			image: product.imgTitle,
			discount: discountCodeValue !== 0 ? discountCodeValue : 0,
			price:
				discountCodeValue !== 0
					? computeDiscount(finalPrice, discountCodeValue)
					: finalPrice,
			title: product.title,
			frameColor,
			chassis,
		};

		const productsList = [...storedProducts, finalProduct];
		dispatch(loadProducts(productsList));

		setItemCount(
			Math.max(Number.parseInt(localStorage.getItem('itemCount')) + 1, 0)
		);
	};

	useEffect(() => {
		setFinalPrice(updatePrice(product, frameColor, chassis));
	}, [frameColor, chassis]);

	return (
		<div className={classes.container}>
			<div className={classes.carouselContainer}>
				<ItemImagesCarousel product={product} />
			</div>
			<div className={classes.introductionContainer}>
				<div className={classes.titleContainer}>
					<h1>{product.title}</h1>
					<h2>{finalPrice.toFixed(2) + ' lei'}</h2>
				</div>

				<FrameAndChassisSelect
					frameColor={frameColor}
					chassis={chassis}
					setChassis={setChassis}
					setFrameColor={setFrameColor}
				/>

				<div className={classes.addToCartContainer}>
					<a href='/cos-de-cumparaturi'>
						<Button className={classes.cartButton} onClick={computeProductCart}>
							ADAUGĂ ÎN COȘ
						</Button>
					</a>
				</div>

				<div className={classes.detailsDropdownContainer}>
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
	);
};

export default ProductInfoPage;
