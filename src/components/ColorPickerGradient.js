import { React, useState } from 'react';
import { SwatchGradient } from './SwatchGradient';
import reactCSS from 'reactcss';
import Button from '@material-ui/core/Button';
import '../styling/flipcardSwatches.css';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectProduct } from '../reducers/productSlice';
import { loadProducts } from '../reducers/productsSlice';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useMediaQuery from '@mui/material/useMediaQuery';
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

	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = 2;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
	};

	const dispatch = useDispatch();
	const localStoreProducts = localStorage.getItem('products');
	console.log(localStoreProducts);
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
          rgba(${colorSwatch2.r}, ${colorSwatch2.g}, ${colorSwatch2.b}, ${colorSwatch2.a}),
          rgba(${colorSwatch3.r}, ${colorSwatch3.g}, ${colorSwatch3.b}, ${colorSwatch3.a}),
          rgba(${colorSwatch4.r}, ${colorSwatch4.g}, ${colorSwatch4.b}, ${colorSwatch4.a}),
          rgba(248, 221, 170, 0.244),
          rgba(248, 221, 170, 0.244),
		  rgba(248, 221, 170, 0.244),
          rgba(248, 221, 170, 0.244),
          rgba(248, 221, 170, 0.244)`,
			},
		},
	});

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
		};

		const productsList = [...storedProducts, finalProduct];
		dispatch(loadProducts(productsList));

		setItemCount(
			Math.max(Number.parseInt(localStorage.getItem('itemCount')) + 1, 0)
		);
	};

	const wideScreen = useMediaQuery('(min-width:1025px)');

	return (
		<div class='body'>
			<div class='container'>
				{wideScreen && (
					<div>
						{console.log(currentSlide)}
						{currentSlide == 1 && (
							<div
								id='Resources'
								class='imageSlideCorner'
								style={styles.gradient}
								onClick={nextSlide}
							></div>
						)}
						{currentSlide == 0 && (
							<img
								src={require(`../images/${product.image}`)}
								class='imageSlideCorner'
								onClick={prevSlide}
							/>
						)}
					</div>
				)}
				<div>
					{currentSlide == 0 && (
						<div
							id='Resources'
							class='gradientDiv'
							style={styles.gradient}
						></div>
					)}
					{currentSlide == 1 && (
						<img
							src={require(`../images/${product.image}`)}
							class='gradientDiv'
						/>
					)}
				</div>
				{!wideScreen && (
					<div class='bodySwatches'>
						<SwatchGradient color={colorSwatch1} setColor={setColorSwatch1} />
						<SwatchGradient color={colorSwatch2} setColor={setColorSwatch2} />
						<SwatchGradient color={colorSwatch3} setColor={setColorSwatch3} />
						<SwatchGradient color={colorSwatch4} setColor={setColorSwatch4} />
					</div>
				)}
				<div class='descriptionContainer'>
					<div class='titleContainer'>
						<h>
							Personalizare tablou <br />
							{product.title}
							<br />
							{product.price} <br />
						</h>
					</div>
					<div class='paragraphContainer'>
						<p>{product.description}</p>
						<p>
							Începe personalizarea tabloului, alegând cele patru culori. Vei
							vedea modificările tale pe parcurs.
						</p>
					</div>
					{wideScreen && (
						<div class='bodySwatches'>
							<SwatchGradient color={colorSwatch1} setColor={setColorSwatch1} />
							<SwatchGradient color={colorSwatch2} setColor={setColorSwatch2} />
							<SwatchGradient color={colorSwatch3} setColor={setColorSwatch3} />
							<SwatchGradient color={colorSwatch4} setColor={setColorSwatch4} />
						</div>
					)}

					<div class='buttonContainer'>
						<Link to='/cosdecumparaturi'>
							<Button class='button' onClick={computeProductCart}>
								ADAUGĂ ÎN COȘ
							</Button>
						</Link>
						<div class='detailsContainer'>
							<p>
								Material: lemn natural <br />
								Dimensiune: 30x40 cm <br />
								Agățător: da
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ColorPickerGradient;
