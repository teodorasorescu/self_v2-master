import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import '../styling/addProduct.css';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../reducers/slices/productSlice';
import { loadProducts } from '../reducers/slices/productsSlice';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import ProductCarousel from './ProductCarousel';
import { frameColors } from '../constants/frameColors';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import {
	atentionareCuloare,
	details,
	suport,
} from '../constants/productConstants';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import reactCSS from 'reactcss';
import AttentionPrint from '../images/cmyk.png';

const AddProduct = () => {
	const [frameColor, setFrameColor] = useState('fără');

	const setField = (event) => {
		setFrameColor(event.target.value);
	};

	const dispatch = useDispatch();
	const localStoreProducts = localStorage.getItem('products');

	let storedProducts = [];
	if (localStoreProducts != []) {
		storedProducts = JSON.parse(localStoreProducts);
	} else {
		storedProducts = localStoreProducts;
	}

	const { itemCount, setItemCount } = useStateContext();
	let product = useSelector(selectProduct);

	const navigate = useNavigate();

	const computeProductCart = () => {
		let productId = uuidv4();
		const finalProduct = {
			id: productId,
			image: product.image,
			price: product.price,
			title: product.title,
			colors: product.colors,
			quantity: 1,
			description: product.description,
			frameColor: frameColor,
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
					background: `radial-gradient(circle at center,rgba(${product.colors[0][0][1]}, ${product.colors[0][1][1]}, ${product.colors[0][2][1]}, ${product.colors[0][3][1]}) 0,
        rgba(${product.colors[0][0][1]}, ${product.colors[0][1][1]}, ${product.colors[0][2][1]}, ${product.colors[0][3][1]}),
				rgba(${product.colors[1][0][1]}, ${product.colors[1][1][1]}, ${product.colors[1][2][1]}, ${product.colors[1][3][1]}),
				rgba(${product.colors[2][0][1]}, ${product.colors[2][1][1]}, ${product.colors[2][2][1]}, ${product.colors[2][3][1]}),
				rgba(${product.colors[3][0][1]}, ${product.colors[3][1][1]}, ${product.colors[3][2][1]}, ${product.colors[3][3][1]}),
       rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243)
        )`,
				},

				title: {
					color: `rgba(${product.fontColor.r}, ${product.fontColor.g}, ${product.fontColor.b}, ${product.fontColor.a})`,
				},
				subtitle: {
					color: `rgba(${product.fontColor.r}, ${product.fontColor.g}, ${product.fontColor.b}, ${product.fontColor.a})`,
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
					background: `rgba(${color[0][1]}, ${color[1][1]}, ${color[2][1]}, ${color[3][1]})`,
					cursor: 'default',
				}}
			></div>
		));
	};

	const goToPrevious = () => {
		navigate('/personalizare');
	};

	return (
		<div className='bodyContainer'>
			<ArrowBackIosIcon onClick={goToPrevious} />
			<div className='secondContainer'>
				<div className='carouselContainer'>
					<ProductCarousel
						product={product}
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
						<h1>
							Poster Canvas {product.title}
							<br />
							{product.price.toFixed(2) + ' lei'}
							<br />
						</h1>
					</div>
					<div className='productContainer'>
						<h5>Personalizarea posterului</h5>
					</div>
					<div className='bodySwatchesContainer'>
						{listItems(product.colors)}
					</div>
					<div className='frameContainer'>
						<select
							id='culoare_ramă'
							name='culoare_ramă'
							className='form-select'
							placeholder='Culoare ramă'
							onChange={setField}
						>
							<option value=''>Continuă fără ramă</option>
							{frameColors.map((color, index) => {
								return <option key={`color-${index}`}>{color}</option>;
							})}
						</select>
					</div>
					<div className='printAttention'>
						<p>
							<img src={AttentionPrint} alt='attprint' /> {atentionareCuloare}
						</p>
					</div>
					<div className='addToCartContainer'>
						<Link to='/cos-de-cumparaturi'>
							<Button className='cartButton' onClick={computeProductCart}>
								ADAUGĂ ÎN COȘ
							</Button>
						</Link>
					</div>
					<div className='detailsDropdownContainer'>
						<Dropdown title='DETALII' content={details} />
						<Dropdown title='SUPORT' content={suport} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
