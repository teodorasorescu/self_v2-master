import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import {
	computeProduct,
	getCurrencyByCountry,
	updateCardPrice,
} from '../../../constants/utils';
import classes from './poster.page.module.scss';
import { useStateContext } from '../../../contexts/ContextProvider';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from '../../Dropdown';
import ItemImagesCarousel from '../../features/products/ItemImagesCarousel';
import ReactGA from 'react-ga4';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux';
import { loadProducts } from '../../../reducers/slices/productsSlice';
import {
	deliveryDetails,
	selectedShowcaseProducts,
} from '../../../constants/productConstants';
import SelectedForYouPage from '../selectedForYouShowcase/SelectedForYouPage';
import { useCountry } from '../../../contexts/CountryProvider';

const CardInfoPage = ({ product, suport, details }) => {
	const { itemCount, setItemCount } = useStateContext();
	const isArtist = product.artist !== null;
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');

	const { countryCode } = useCountry();
	const [finalPrice, setFinalPrice] = useState(
		updateCardPrice(product.price, getCurrencyByCountry(countryCode))
	);

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
		console.log(product);
		const finalProduct = computeProduct(
			product,
			finalPrice.price,
			discountCodeValue,
			'none',
			false,
			'10x14.4cm'
		);

		const productsList = [...storedProducts, finalProduct];

		dispatch(loadProducts(productsList));

		setItemCount(
			Math.max(Number.parseInt(localStorage.getItem('itemCount')) + 1, 0)
		);
	};

	return (
		<div className={classes.container}>
			<div className={classes.carouselContainer}>
				<ItemImagesCarousel product={product} />
			</div>
			<div className={classes.introductionContainer}>
				<div className={classes.titleContainer}>
					<h1>{product.title}</h1>
					{isArtist && (
						<a>
							<h3>{product.artist.artist}</h3>
						</a>
					)}
					<h2>{finalPrice.price + ' ' + finalPrice.currency} </h2>
				</div>
				<h4>
					Each card invites you to choose an intention, light your candle with
					purpose and let the flame carry your thoughts toward what you wish for
					the new year.
				</h4>
				<h4>
					Measuring 10 × 14.4 cm, printed on high-quality 260 g/m² paper and
					arrives individually packaged in a transparent protective sleeve. The
					candle is free from harmful substances and made with clean, safe
					ingredients.
				</h4>

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
								Add to Cart
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
						title='Specifications'
						content={details}
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
							<SelectedForYouPage data={selectedShowcaseProducts} />{' '}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default CardInfoPage;
