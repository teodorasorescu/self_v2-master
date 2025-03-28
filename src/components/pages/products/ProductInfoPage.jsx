import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { computeProduct, updatePrice } from '../../../constants/utils';
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
import {
	deliveryDetails,
	freeFraming,
} from '../../../constants/productConstants';
import SelectedForYouPage from '../selectedForYouShowcase/SelectedForYouPage';

const ProductInfoPage = ({ product, suport, details }) => {
	const [frameColor, setFrameColor] = useState('fără');
	const [chassis, setChassis] = useState(false);
	const [size, setSize] = useState('21x30cm');
	const { itemCount, setItemCount } = useStateContext();
	const isArtist = product.artist !== null;
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');
	const [finalPrice, setFinalPrice] = useState(product.price);
	const width = smartphoneScreen ? '90vw' : '25vw';
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
			button_label: `Adauga In Cos ${product.title}`,
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

	useEffect(() => {
		setFinalPrice(updatePrice(frameColor, chassis, size, product.price));
	}, [frameColor, chassis, size]);

	return (
		<div className={classes.container}>
			<div className={classes.carouselContainer}>
				<ItemImagesCarousel product={product} />
				{!smartphoneScreen && (
					<div className={classes.productsShowcase}>
						<div className={classes.productsShowcase}>
							<SelectedForYouPage
								data={[
									'Love Feeling 2',
									'Love Feeling 1',
									'A table for two, please!',
									'Sunset Feelings',
									'There is Strength in Vulnerability',
									'Inner Blooming',
									'Soul Compassion',
									'Graceful Mind',
								]}
							/>{' '}
						</div>
					</div>
				)}
			</div>
			<div className={classes.introductionContainer}>
				<div className={classes.titleContainer}>
					<h1>{product.title}</h1>
					{isArtist && (
						<a href={`/journal/${product.artist.artistUrl}`}>
							<h3>{product.artist.artist}</h3>
						</a>
					)}
					<h2>{finalPrice.toFixed(2) + ' lei'} </h2>
				</div>

				<FrameAndChassisSelect
					frameColor={frameColor}
					chassis={chassis}
					setChassis={setChassis}
					setFrameColor={setFrameColor}
					setSize={setSize}
					size={size}
				/>

				<div className={classes.addToCartContainer}>
					{product.stock !== null && product.stock <= 0 ? (
						<>
							<Button className={classes.cartButton}>OUT OF STOCK</Button>
						</>
					) : (
						<a href='/cart'>
							<Button
								className={classes.cartButton}
								onClick={computeProductCart}
							>
								ADAUGĂ ÎN COȘ
							</Button>
						</a>
					)}
				</div>

				<div className={classes.detailsDropdownContainer}>
					{product.artist != null && (
						<Dropdown
							title='About Artist'
							content={product.artist.artistDescription}
							dropdownWidth={width}
							value={true}
							artistImg={product.artist.aboutArtistImg}
						/>
					)}
					<Dropdown
						title='Print & Frame Specifications'
						content={details}
						dropdownWidth={width}
						value={false}
					/>
					<Dropdown
						title='Free Framing Service'
						content={freeFraming}
						dropdownWidth={width}
						value={false}
					/>
					<Dropdown
						title='Delivery & Returns'
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
				{smartphoneScreen && (
					<div className={classes.productsShowcase}>
						<div className={classes.productsShowcase}>
							<SelectedForYouPage
								data={[
									'Love Feeling 2',
									'Love Feeling 1',
									'A table for two, please!',
									'Sunset Feelings',
									'There is Strength in Vulnerability',
									'Inner Blooming',
									'Soul Compassion',
									'Graceful Mind',
								]}
							/>{' '}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductInfoPage;
