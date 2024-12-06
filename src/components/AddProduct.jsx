import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import '../styling/addProduct.css';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../reducers/slices/productSlice';
import { loadProducts } from '../reducers/slices/productsSlice';
import ProductCarousel from './ProductCarousel';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import {
	deliveryDetails,
	details,
	freeFraming,
	suport,
} from '../constants/productConstants';
import reactCSS from 'reactcss';
import ReactGA from 'react-ga4';
import useMediaQuery from '@mui/material/useMediaQuery';
import { computeProduct, updatePrice } from '../constants/utils';
import FrameAndChassisSelect from './FrameAndChassisSelect';

const AddProduct = () => {
	const [frameColor, setFrameColor] = useState('fără');
	const [chassis, setChassis] = useState(false);
	const [size, setSize] = useState('21x30cm');
	const { itemCount, setItemCount } = useStateContext();

	let product = useSelector(selectProduct);
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

		const finalProduct = computeProduct(
			product,
			finalPrice,
			discountCodeValue,
			frameColor,
			chassis,
			size
		);

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
		if (colors === undefined) {
			return;
		}
		return colors.map((color) => (
			<div
				key={Math.random() * 101}
				style={{
					width: '40px',
					height: '40px',
					borderRadius: '50%',
					margin: '3px',
					background: `rgb(${color[0][1]}, ${color[1][1]}, ${color[2][1]})`,
					cursor: 'default',
				}}
			></div>
		));
	};

	useEffect(() => {
		setFinalPrice(updatePrice(frameColor, chassis, size));
	}, [frameColor, chassis, size]);

	useEffect(() => {
		ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
	}, []);

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
						<h1>{product.title}</h1>
						<h2>{finalPrice.toFixed(2) + ' lei'} </h2>
					</div>
					<div className='productContainer'>
						<h5>Personalizarea tabloului</h5>
					</div>
					<div className='bodySwatchesContainer'>
						{listItems(product.colors)}
					</div>
					<FrameAndChassisSelect
						frameColor={frameColor}
						chassis={chassis}
						setChassis={setChassis}
						setFrameColor={setFrameColor}
						setSize={setSize}
						size={size}
					/>

					<div className='addToCartContainer'>
						<a href='/cart'>
							<Button className='cartButton' onClick={computeProductCart}>
								ADAUGĂ ÎN COȘ
							</Button>
						</a>
					</div>
					<div className='detailsDropdownContainer'>
						<Dropdown
							title='Poster Details'
							content={details}
							dropdownWidth={width}
							value={true}
						/>
						<Dropdown
							title='Free Framing Service'
							content={freeFraming}
							dropdownWidth={width}
							value={false}
						/>
						<Dropdown
							title='Delivery'
							content={deliveryDetails}
							dropdownWidth={width}
							value={false}
						/>

						<Dropdown
							title='Support'
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
