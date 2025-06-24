import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import styles from '../styling/smartphone.cart.module.scss';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import CartActions from './CartActions';
import { calculateTotalPrice } from '../constants/utils';
import { createTheme, ThemeProvider } from '@mui/material';
import DiscountForm from './DiscountForm.jsx';
import { S3_BUCKET } from '../constants/links.js';
import SelectedForYouPage from './pages/selectedForYouShowcase/SelectedForYouPage.jsx';
import { selectedShowcaseProducts } from '../constants/productConstants.js';

const emptyCart = S3_BUCKET + '/emptyCart.webp';

export const SmartphoneCart = ({ currency }) => {
	const { itemCount, setItemCount } = useStateContext();
	const { headerOn, setHeaderOn } = useStateContext();

	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);
	const [total, setTotal] = useState(calculateTotalPrice(storedProducts));
	const discountCodeValue = localStorage.getItem('discountValue');
	const columns = [
		{ id: 'image', label: 'Article' },
		{ id: 'title', label: '' },
	];

	const theme = createTheme({
		typography: {
			fontFamily: 'Raleway',
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
					@font-face {
						font-family: 'Raleway';
						font-style: normal;
						font-display: swap;
						font-weight: 500;
					}
				`,
			},
		},
	});

	const listItems = (colors) => {
		if (colors === undefined) {
			return;
		}
		return colors.map((color) => (
			<div
				key={Math.random() * 101}
				style={{
					width: '25px',
					height: '25px',
					borderRadius: '50%',
					margin: '1%',
					marginTop: '5%',
					background: `rgb(${color[0][1]}, ${color[1][1]}, ${color[2][1]})`,
				}}
			></div>
		));
	};

	const navigate = useNavigate();
	const goToCheckout = () => {
		setHeaderOn(false);
		navigate('/checkout');
	};

	useEffect(() => {
		setHeaderOn(true);
	}, []);

	useEffect(() => {
		setTotal(calculateTotalPrice(storedProducts));
	}, [storedProducts]);

	return (
		<div className={styles.cart}>
			<div className={styles.container}>
				<p>Cart</p>
			</div>
			{storedProducts.length === 0 && setItemCount(0)}
			{storedProducts.length === 0 ? (
				<img
					src={emptyCart}
					className={styles.image}
					alt='cos de cumparaturi gol'
				/>
			) : (
				<ThemeProvider theme={theme}>
					<Paper
						sx={{
							overflow: 'hidden',
							boxShadow: 'none',
						}}
					>
						<TableContainer>
							<Table>
								<TableBody>
									{storedProducts.map((row, index) => {
										return (
											<TableRow
												hover
												role='checkbox'
												tabIndex={-1}
												key={Math.random() * 101}
												style={{ width: '50vw' }}
											>
												{columns.map((column) => {
													const value = row[column.id];
													return (
														<TableCell key={column.id} align={column.align}>
															<div
																style={{
																	fontSize: '100%',
																}}
															>
																{column.id === 'image' ? (
																	<div>
																		<div>
																			<img
																				src={`${S3_BUCKET}/${value}`}
																				width='70'
																				alt='Tablou Canvas Gradient Personalizat - Body Mind Soul'
																			/>{' '}
																		</div>

																		<div
																			style={{
																				display: 'flex',
																				flexDirection: 'row',
																			}}
																		>
																			{listItems(row['colors'])}
																		</div>
																	</div>
																) : column.id === 'title' ? (
																	<div
																		style={{
																			display: 'flex',
																			flexDirection: 'column',
																		}}
																	>
																		<p className={styles.title}>{value}</p>

																		<p className={styles.frame}>
																			Size: {row['size']}
																		</p>
																		{row['chassis'] === true && (
																			<p className={styles.frame}>
																				Sketched Canvas
																			</p>
																		)}
																		{row['frameColor'] !== 'none' && (
																			<p className={styles.frame}>
																				Frame: {row['frameColor']}
																			</p>
																		)}

																		<div>
																			{discountCodeValue != 0 ? (
																				<>
																					<p className={styles.discountedPrice}>
																						{(
																							row['quantity'] *
																							row['initialPrice']
																						).toFixed(1) + currency}
																					</p>
																					<p className={styles.price}>
																						{(
																							row['quantity'] * row['price']
																						).toFixed(1) + currency}
																					</p>
																				</>
																			) : (
																				<p className={styles.price}>
																					{(
																						row['quantity'] * row['price']
																					).toFixed(1) + currency}
																				</p>
																			)}
																		</div>

																		<div>
																			<CartActions
																				quantity={row['quantity']}
																				productId={index}
																			/>
																		</div>
																	</div>
																) : null}
															</div>
														</TableCell>
													);
												})}
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
							<div style={{ paddingTop: '2%' }}>
								<p
									style={{
										position: 'relative',
										fontStyle: 'italic',
										fontSize: '8vw',
										paddingRight: '2%',
									}}
									align='right'
								>
									{'Total:  ' + total.toFixed(1) + currency}
								</p>
							</div>

							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								{' '}
								<DiscountForm />
								<Button
									className={styles.checkoutButton}
									onClick={() => {
										goToCheckout();
									}}
								>
									CHECKOUT
								</Button>
								<Button
									style={{
										fontStyle: 'italic',
										textDecoration: 'none',
										width: '100vw',
										paddingBottom: '10%',
									}}
								>
									<Link
										to='/'
										style={{ textDecoration: 'none', color: 'black' }}
									>
										Get More Posters
									</Link>
								</Button>
							</div>
						</TableContainer>
					</Paper>
				</ThemeProvider>
			)}
			<SelectedForYouPage data={selectedShowcaseProducts} />
		</div>
	);
};
