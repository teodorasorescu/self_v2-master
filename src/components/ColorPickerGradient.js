import { React, useState } from 'react';
import { SwatchGradient } from './SwatchGradient';
import reactCSS from 'reactcss';
import Button from '@material-ui/core/Button';
import '../styling/flipcardSwatches.css';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProduct } from '../reducers/slices/productSlice';
import { loadProducts } from '../reducers/slices/productsSlice';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductCarousel from './ProductCarousel';
import ColorPsychology from './ColorPsychology';
import ProductInfo from './ProductInfo';
import { frameColors } from '../constants/frameColors';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from './Dropdown';
import { details } from '../constants/productConstants';
import { suport } from '../constants/productConstants';

function ColorPickerGradient() {
	const [colorSwatch1, setColorSwatch1] = useState({
		r: '255',
		g: '190',
		b: '11',
		a: '1',
	});

	const [colorSwatch2, setColorSwatch2] = useState({
		r: '251',
		g: '86',
		b: '7',
		a: '1',
	});

	const [colorSwatch3, setColorSwatch3] = useState({
		r: '255',
		g: '0',
		b: '110',
		a: '1',
	});

	const [colorSwatch4, setColorSwatch4] = useState({
		r: '255',
		g: '163',
		b: '163',
		a: '1',
	});

	const [frameColor, setFrameColor] = useState('standard');

	const setField = (event) => {
		setFrameColor(event.target.value);
	};

	const dispatch = useDispatch();
	const localStoreProducts = localStorage.getItem('products');

	var storedProducts = [];
	if (localStoreProducts != []) {
		storedProducts = JSON.parse(localStoreProducts);
	} else {
		storedProducts = localStoreProducts;
	}

	const { itemCount, setItemCount } = useStateContext();
	var product = useSelector(selectProduct);

	const styles = reactCSS({
		default: {
			gradient: {
				background: `radial-gradient(circle at center, rgba(${colorSwatch1.r}, ${colorSwatch1.g}, ${colorSwatch1.b}, ${colorSwatch1.a}) 0,
				rgba(${colorSwatch1.r}, ${colorSwatch1.g}, ${colorSwatch1.b}, ${colorSwatch1.a}),
          rgba(${colorSwatch2.r}, ${colorSwatch2.g}, ${colorSwatch2.b}, ${colorSwatch2.a}),
          rgba(${colorSwatch3.r}, ${colorSwatch3.g}, ${colorSwatch3.b}, ${colorSwatch3.a}),
          rgba(${colorSwatch4.r}, ${colorSwatch4.g}, ${colorSwatch4.b}, ${colorSwatch4.a}),
          rgba(248, 221, 170, 0.3),
          rgba(248, 221, 170, 0.3),
		  	  rgba(248, 221, 170, 0.3),
          rgba(248, 221, 170, 0.3),
          rgba(248, 221, 170, 0.3)`,
			},
		},
	});

	console.log(frameColor);
	const computeProductCart = () => {
		let productId = uuidv4();
		const finalProduct = {
			id: productId,
			image: product.image,
			price: product.price,
			title: product.title,
			colors: [
				Object.entries(colorSwatch1),
				Object.entries(colorSwatch2),
				Object.entries(colorSwatch3),
				Object.entries(colorSwatch4),
			],
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

	const wideScreen = useMediaQuery('(min-width:1025px)');

	return (
		<div className='body'>
			<div className='container'>
				<div className='posterContainer'>
					<ProductCarousel
						product={product}
						classGradient='gradientDiv'
						styleGradient={styles.gradient}
					/>
					<div className='bodySwatches'>
						<SwatchGradient color={colorSwatch1} setColor={setColorSwatch1} />
						<SwatchGradient color={colorSwatch2} setColor={setColorSwatch2} />
						<SwatchGradient color={colorSwatch3} setColor={setColorSwatch3} />
						<SwatchGradient color={colorSwatch4} setColor={setColorSwatch4} />
					</div>

					{wideScreen && <ProductInfo styleContainer='posterContainer' />}
				</div>
				<div className='descriptionContainer'>
					<div className='titleContainer'>
						<h1>
							Personalizare tablou <br />
							{product.title}
							<br />
							{product.price.toFixed(2) + ' lei'}
							<br />
						</h1>
					</div>
					<div className='paragraphContainer'>
						<p>{product.description}</p>
						<p>
							Începe personalizarea tabloului, alegând cele patru culori. Vei
							vedea modificările tale pe parcurs.
						</p>
					</div>
					<select
						id='culoare_ramă'
						name='culoare_ramă'
						className='form-select'
						placeholder='Culoare ramă'
						onChange={setField}
					>
						<option value=''>Culoare ramă</option>
						{frameColors.map((color, index) => {
							return <option key={`color-${index}`}>{color}</option>;
						})}
					</select>
					<div className='buttonContainer'>
						<Link to='/cos-de-cumparaturi'>
							<Button className='button' onClick={computeProductCart}>
								ADAUGĂ ÎN COȘ
							</Button>
						</Link>
						<div className='detailsContainer'>
							<Dropdown title='DETALII' content={details} />
							<Dropdown title='SUPORT' content={suport} />
						</div>
					</div>
					<ColorPsychology />
				</div>
			</div>
		</div>
	);
}

export default ColorPickerGradient;
