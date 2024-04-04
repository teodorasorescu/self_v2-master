import { useState } from 'react';
import { SwatchGradient } from './SwatchGradient';
import reactCSS from 'reactcss';
import Button from '@material-ui/core/Button';
import '../styling/flipcardSwatches.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadProduct, selectProduct } from '../reducers/slices/productSlice';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ColorPsychology from './ColorPsychology';
import ProductInfo from './ProductInfo';
import 'bootstrap/dist/css/bootstrap.css';
import {
	color0,
	color2,
	color1,
	color3,
	fontColors,
	atentionareCuloare,
} from '../constants/productConstants';
import AttentionPrint from '../images/cmyk.png';

function ColorPickerGradient() {
	let product = useSelector(selectProduct);
	const isColorChanged =
		product.colors !== undefined && product.colors.length !== 0;
	const [colorSwatch1, setColorSwatch1] = useState(
		isColorChanged
			? {
					r: product.colors[0][0][1],
					g: product.colors[0][1][1],
					b: product.colors[0][2][1],
					a: product.colors[0][3][1],
			  }
			: color0
	);

	const [colorSwatch2, setColorSwatch2] = useState(
		isColorChanged
			? {
					r: product.colors[1][0][1],
					g: product.colors[1][1][1],
					b: product.colors[1][2][1],
					a: product.colors[1][3][1],
			  }
			: color1
	);

	const [colorSwatch3, setColorSwatch3] = useState(
		isColorChanged
			? {
					r: product.colors[2][0][1],
					g: product.colors[2][1][1],
					b: product.colors[2][2][1],
					a: product.colors[2][3][1],
			  }
			: color2
	);

	const [colorSwatch4, setColorSwatch4] = useState(
		isColorChanged
			? {
					r: product.colors[3][0][1],
					g: product.colors[3][1][1],
					b: product.colors[3][2][1],
					a: product.colors[3][3][1],
			  }
			: color3
	);

	const dispatch = useDispatch();

	const [fontColor, setFontColor] = useState(
		product.fontColor !== undefined && product.fontColor !== ''
			? product.fontColor
			: colorSwatch1
	);

	const colorsMap = new Map();

	colorsMap.set('Prima culoare', colorSwatch1);
	colorsMap.set('A doua culoare', colorSwatch2);
	colorsMap.set('A treia culoare', colorSwatch3);
	colorsMap.set('A patra culoare', colorSwatch4);
	useEffect(() => {
		if (isImageEmpty) {
			navigate('/');
		}
	}, []);

	const setField = (event) => {
		setFontColor(colorsMap.get(event.target.value));
	};

	const styles = reactCSS({
		default: {
			gradient: {
				background: `radial-gradient(circle at center, rgba(${colorSwatch1.r}, ${colorSwatch1.g}, ${colorSwatch1.b}, ${colorSwatch1.a}) 0,
				rgba(${colorSwatch1.r}, ${colorSwatch1.g}, ${colorSwatch1.b}, ${colorSwatch1.a}),
          rgba(${colorSwatch2.r}, ${colorSwatch2.g}, ${colorSwatch2.b}, ${colorSwatch2.a}),
          rgba(${colorSwatch3.r}, ${colorSwatch3.g}, ${colorSwatch3.b}, ${colorSwatch3.a}),
          rgba(${colorSwatch4.r}, ${colorSwatch4.g}, ${colorSwatch4.b}, ${colorSwatch4.a}),
					rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243),rgb(252, 247, 243)
					`,
			},

			title: {
				color: `rgba(${fontColor.r}, ${fontColor.g}, ${fontColor.b}, ${fontColor.a})`,
			},
			subtitle: {
				color: `rgba(${fontColor.r}, ${fontColor.g}, ${fontColor.b}, ${fontColor.a})`,
			},
		},
	});

	const navigate = useNavigate();
	const isImageEmpty = product.image === '';

	const computeColors = () => {
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
			fontColor: fontColor,
			quantity: 1,
			description: product.description,
			subtitle: product.subtitle,
		};

		dispatch(loadProduct(finalProduct));
	};

	const wideScreen = useMediaQuery('(min-width:1025px)');

	return (
		<div className='body'>
			<div className='container'>
				<div className='posterContainer'>
					<div className='gradientDiv' style={styles.gradient}>
						<p className='gradientTitle' style={styles.title}>
							{product.title}
						</p>
						<p className='gradientSubtitle' style={styles.subtitle}>
							{product.subtitle}
						</p>
					</div>

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
							Personalizare poster <br />
							{product.title}
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
					<div className='frameContainer'>
						<select
							id='culoare_font'
							name='culoare_font'
							className='form-select'
							placeholder='Culoare font'
							onChange={setField}
						>
							<option value='Prima culoare'>Culoare font</option>
							{fontColors.map((color, index) => {
								return <option key={`color-${index}`}>{color}</option>;
							})}
						</select>
					</div>
					<div className='buttonContainer'>
						<Link to='/adaugă-produs'>
							<Button className='button' onClick={computeColors}>
								MERGI MAI DEPARTE
							</Button>
						</Link>
					</div>
					<div className='printAttention'>
						<p>
							<img src={AttentionPrint} alt='attprint' /> {atentionareCuloare}
						</p>
					</div>
					<ColorPsychology />
				</div>
			</div>
		</div>
	);
}

export default ColorPickerGradient;
