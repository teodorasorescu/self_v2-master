import { useState, useRef } from 'react';
import { SwatchGradient } from './SwatchGradient';
import reactCSS from 'reactcss';
import Button from '@mui/material/Button';
import '../styling/flipcardSwatches.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { loadProduct, selectProduct } from '../reducers/slices/productSlice';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import ColorPsychology from './ColorPsychology';
import 'bootstrap/dist/css/bootstrap.css';
import {
	color0,
	color2,
	color1,
	color3,
	fontColors,
} from '../constants/productConstants';
import ProductInfo from './ProductInfo';
import VisualImagesPickerGradient from './VisiualImagesPickerGradient';
import ReactGA from 'react-ga4';

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
			  }
			: color0
	);

	const [colorSwatch2, setColorSwatch2] = useState(
		isColorChanged
			? {
					r: product.colors[1][0][1],
					g: product.colors[1][1][1],
					b: product.colors[1][2][1],
			  }
			: color1
	);

	const [colorSwatch3, setColorSwatch3] = useState(
		isColorChanged
			? {
					r: product.colors[2][0][1],
					g: product.colors[2][1][1],
					b: product.colors[2][2][1],
			  }
			: color2
	);

	const [colorSwatch4, setColorSwatch4] = useState(
		isColorChanged
			? {
					r: product.colors[3][0][1],
					g: product.colors[3][1][1],
					b: product.colors[3][2][1],
			  }
			: color3
	);

	const dispatch = useDispatch();

	const [fontColor, setFontColor] = useState(
		product.fontColor !== undefined && product.fontColor !== ''
			? product.fontColor
			: colorSwatch1
	);

	const myRef = useRef(null);
	const executeScroll = () => {
		myRef.current.scrollIntoView();
	};

	const colorsMap = new Map();

	colorsMap.set('Prima culoare', colorSwatch1);
	colorsMap.set('A doua culoare', colorSwatch2);
	colorsMap.set('A treia culoare', colorSwatch3);
	colorsMap.set('A patra culoare', colorSwatch4);

	useEffect(() => {
		ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

		if (isImageEmpty) {
			navigate('/');
		}
	}, []);

	const setField = (event) => {
		setFontColor(colorsMap.get(event.target.value));
		executeScroll();
	};

	const styles = reactCSS({
		default: {
			gradient: {
				backgroundColor: 'rgba(249, 237, 223, 0.3)',
				background: `radial-gradient(circle at center, rgb(${colorSwatch1.r}, ${colorSwatch1.g}, ${colorSwatch1.b}) 0,
				rgb(${colorSwatch1.r}, ${colorSwatch1.g}, ${colorSwatch1.b}) ,
				  rgb(${colorSwatch2.r}, ${colorSwatch2.g}, ${colorSwatch2.b}),
				  rgb(${colorSwatch3.r}, ${colorSwatch3.g}, ${colorSwatch3.b}) ,
				  rgb(${colorSwatch4.r}, ${colorSwatch4.g}, ${colorSwatch4.b}) , rgb(${colorSwatch4.r}, ${colorSwatch4.g}, ${colorSwatch4.b}, 0.2) ,
					rgba(249, 237, 223, 0.3), rgba(249, 237, 223, 0.3), rgba(249, 237, 223, 0.3), rgba(249, 237, 223, 0.3), rgba(249, 237, 223, 0.3), rgba(249, 237, 223, 0.3), rgba(249, 237, 223, 0.3)
					`,
			},

			title: {
				color: `rgb(${fontColor.r}, ${fontColor.g}, ${fontColor.b})`,
			},
			subtitle: {
				color: `rgb(${fontColor.r}, ${fontColor.g}, ${fontColor.b})`,
			},
		},
	});

	const navigate = useNavigate();
	const isImageEmpty = product.image === '';

	const computeColors = () => {
		ReactGA.event('button_click', {
			button_label: 'Mergi mai departe',
		});

		let productId = uuidv4();

		const finalProduct = {
			...product,
			id: productId,
			colors: [
				Object.entries(colorSwatch1),
				Object.entries(colorSwatch2),
				Object.entries(colorSwatch3),
				Object.entries(colorSwatch4),
			],
			fontColor,
			quantity: 1,
		};

		dispatch(loadProduct(finalProduct));
	};

	const wideScreen = useMediaQuery('(min-width:1025px)');
	const shuffleSwatches = () => {
		const swatches = [colorSwatch1, colorSwatch2, colorSwatch3, colorSwatch4];
		// Shuffle the swatches array
		for (let i = swatches.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[swatches[i], swatches[j]] = [swatches[j], swatches[i]];
		}
		// Update the state with the shuffled colors
		setColorSwatch1(swatches[0]);
		setColorSwatch2(swatches[1]);
		setColorSwatch3(swatches[2]);
		setColorSwatch4(swatches[3]);
	};

	return (
		<div className='body'>
			<div className='container'>
				<div ref={myRef} className='posterContainer'>
					<div className='gradientDiv' style={styles.gradient}>
						<p className='gradientTitle' style={styles.title}>
							{product.customTitle}
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
					<div className='buttonContainer'>
						<Button className='button' onClick={shuffleSwatches}>
							SHUFFLE
						</Button>
					</div>

					{wideScreen && <ProductInfo />}
				</div>
				<div className='descriptionContainer'>
					<div className='titleContainer'>
						<h1>
							Personalizare tablou <br />
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

					<ColorPsychology />
				</div>
			</div>
			<VisualImagesPickerGradient />
		</div>
	);
}

export default ColorPickerGradient;
