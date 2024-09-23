import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '../styling/addProduct.css';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../reducers/slices/productSlice';
import { loadProducts } from '../reducers/slices/productsSlice';
import { v4 as uuidv4 } from 'uuid';
import ProductCarousel from './ProductCarousel';
import { frameColors, framePrice } from '../constants/frameColors';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import { chassisPrice, details, suport } from '../constants/productConstants';
import reactCSS from 'reactcss';
import {
	selectChassisStock,
	selectFramesStock,
} from '../reducers/slices/stockSlice';
import getFramesStockAction from '../reducers/actions/getFramesStockAction';
import getChassisStockAction from '../reducers/actions/getChassisStockAction';
import ReactGA from 'react-ga4';

import useMediaQuery from '@mui/material/useMediaQuery';

const AddProduct = () => {
	const [frameColor, setFrameColor] = useState('fără');
	const [chassis, setChassis] = useState(false);
	const { itemCount, setItemCount } = useStateContext();

	let product = useSelector(selectProduct);
	const [finalPrice, setFinalPrice] = useState(product.price);

	const width = useMediaQuery('(max-width:1023px)') ? '90vw' : '25vw';

	const setField = (event) => {
		setFrameColor(event.target.value);
	};

	const setChassisField = (value) => {
		setChassis(value);
	};

	const dispatch = useDispatch();
	const localStoreProducts = localStorage.getItem('products');

	let storedProducts = [];
	if (localStoreProducts != []) {
		storedProducts = JSON.parse(localStoreProducts);
	} else {
		storedProducts = localStoreProducts;
	}

	const computeProductCart = () => {
		ReactGA.event('button_click', {
			button_label: 'Adauga produs buton',
		});

		let productId = uuidv4();

		const finalProduct = {
			id: productId,
			image: product.image,
			price: finalPrice,
			title: product.title,
			colors: product.colors,
			quantity: 1,
			description: product.description,
			frameColor: frameColor,
			chassis: chassis,
			fontColor: product.fontColor,
		};

		const productsList = [...storedProducts, finalProduct];
		dispatch(loadProducts(productsList));

		setItemCount(
			Math.max(Number.parseInt(localStorage.getItem('itemCount')) + 1, 0)
		);
	};

	const areColorsEmpty = product.colors.length === 0;
	let gradientStyles = reactCSS({ gradient: {}, title: {}, subtitle: {} });
	if (!areColorsEmpty) {
		gradientStyles = reactCSS({
			default: {
				gradient: {
					background: `radial-gradient(circle at center,rgb(${product.colors[0][0][1]}, ${product.colors[0][1][1]}, ${product.colors[0][2][1]}) 0,
        rgb(${product.colors[0][0][1]}, ${product.colors[0][1][1]}, ${product.colors[0][2][1]}),
				rgb(${product.colors[1][0][1]}, ${product.colors[1][1][1]}, ${product.colors[1][2][1]}),
				rgb(${product.colors[2][0][1]}, ${product.colors[2][1][1]}, ${product.colors[2][2][1]}),
				rgb(${product.colors[3][0][1]}, ${product.colors[3][1][1]}, ${product.colors[3][2][1]}),
			
       rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243)
        )`,
				},

				title: {
					color: `rgb(${product.fontColor.r}, ${product.fontColor.g}, ${product.fontColor.b})`,
				},
				subtitle: {
					color: `rgb(${product.fontColor.r}, ${product.fontColor.g}, ${product.fontColor.b})`,
				},
			},
		});
	}
	const listItems = (colors) => {
		return colors.map((color) => (
			<div
				key={Math.random() * 101}
				style={{
					width: '40px',
					height: '30px',
					borderRadius: '3px',
					margin: '1%',
					background: `rgb(${color[0][1]}, ${color[1][1]}, ${color[2][1]})`,
					cursor: 'default',
				}}
			></div>
		));
	};

	const framesStock = useSelector(selectFramesStock);
	const chassisStock = useSelector(selectChassisStock);
	useEffect(() => {
		let updatedPrice = product.price;
		if (frameColor !== 'fără') {
			updatedPrice += framePrice;
		}
		if (chassis) {
			updatedPrice += chassisPrice;
		}
		setFinalPrice(updatedPrice);
	}, [frameColor, chassis]);

	useEffect(() => {
		getFramesStockAction(dispatch);
		getChassisStockAction(dispatch);
		ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
	}, []); // Empty dependency array ensures this runs only once when the component mounts

	return (
		<div className='bodyContainer'>
			<div className='secondContainer'>
				<div className='carouselContainer'>
					<ProductCarousel
						product={product}
						altDescription='Adu-ti culoare in casa ta prin tablourile personalizate BODY MIND SOUL'
						classGradient='gradientContainer'
						styleGradient={gradientStyles.gradient}
						title={gradientStyles.title}
						subtitle={gradientStyles.subtitle}
						gradientTitle='gradientTitle'
						gradientSubtitle='gradientSubtitle'
					/>
				</div>
				<div className='introductionContainer'>
					<div className='titleContainer'>
						<h1>Tablou Canvas {product.title}</h1>
						<h2>{finalPrice.toFixed(2) + ' lei'}</h2>
					</div>
					<div className='productContainer'>
						<h5>Personalizarea tabloului</h5>
					</div>
					<div className='bodySwatchesContainer'>
						{listItems(product.colors)}
					</div>
					<div className='frameContainer'>
						<h6>Montare pe șasiu de lemn</h6>
						<select
							id='chassis'
							name='chassis'
							className='form-select'
							placeholder='Montare pe șasiu de lemn'
							onChange={(e) => setChassisField(e.target.value === 'true')}
						>
							<option value='false'>Nu</option>
							<option
								disabled={
									chassisStock == 0 || frameColor !== 'fără' ? true : false
								}
								value='true'
							>
								Da + {chassisPrice} lei
							</option>
						</select>
					</div>

					<div className='frameContainer'>
						<h6>Rame din lemn natural 30x40cm</h6>
						<select
							id='culoare_ramă'
							name='culoare_ramă'
							className='form-select'
							placeholder='Culoare ramă'
							onChange={setField}
						>
							<option value='fără'>Continuă fără ramă</option>
							{frameColors.map((color, index) => {
								return (
									<option
										disabled={
											framesStock == 0 || chassis == true ? true : false
										}
										key={`color-${index}`}
										value={color}
									>
										{color} + {framePrice} lei
									</option>
								);
							})}
						</select>
					</div>

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

export default AddProduct;
