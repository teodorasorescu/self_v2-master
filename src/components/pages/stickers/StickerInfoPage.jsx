import Button from '@mui/material/Button';

import { computeDiscount } from '../../../constants/utils';
import classes from '../products/poster.page.module.scss';
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
const StickerInfoPage = ({ product, suport, details }) => {
	const { itemCount, setItemCount } = useStateContext();
	const width = useMediaQuery('(max-width:1023px)') ? '90vw' : '25vw';
	const dispatch = useDispatch();
	const localStoreProducts = localStorage.getItem('products');
	const smartphoneScreen = useMediaQuery('(max-width:1023px)');

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

		const finalProduct = {
			id: product.id,
			initialPrice: product.price,
			quantity: 1,
			image: product.imgTitle,
			discount: discountCodeValue !== 0 ? discountCodeValue : 0,
			price:
				discountCodeValue !== 0
					? computeDiscount(product.price, discountCodeValue)
					: product.price,
			title: product.title,
			frameColor: 'none',
			size: product.size,
		};

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
					<h2>{product.price.toFixed(1) + ' RON'}</h2>
					<p>
						Since childhood, Marina, the founder of Sweets&Beadz, has felt the
						need to create, to bring color to the world around her. Each piece
						is handmade with care and attention to detail, using materials such
						as air-dry clay, acrylic paints, protective varnishes, as well as
						precious elements like glass and stainless steel. She combines the
						precision of her medical profession with the freedom of artistic
						expression and this duality is reflected in everything she creates.
					</p>
				</div>

				<div className={classes.addToCartContainer}>
					<a href='/cart'>
						<Button className={classes.cartButton} onClick={computeProductCart}>
							Add to Cart
						</Button>
					</a>
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

export default StickerInfoPage;
