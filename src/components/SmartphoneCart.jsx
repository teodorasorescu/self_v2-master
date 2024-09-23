import React, { useEffect } from 'react';
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
import emptyCart from '../images/emptyCart.webp';
import CartActions from './CartActions';
import { calculateTotalPrice } from '../constants/productConstants';
import { createTheme, ThemeProvider } from '@mui/material';

export const SmartphoneCart = () => {
	const { itemCount, setItemCount } = useStateContext();
	const { headerOn, setHeaderOn } = useStateContext();

	useEffect(() => {
		setHeaderOn(true);
	}, []);

	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);

	const columns = [
		{ id: 'image', label: 'Articol' },
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
		return colors.map((color) => (
			<div
				key={Math.random() * 101}
				style={{
					width: '25px',
					height: '20px',
					borderRadius: '3px',
					margin: '1%',
					marginTop: '5%',
					background: `rgb(${color[0][1]}, ${color[1][1]}, ${color[2][1]})`,
				}}
			></div>
		));
	};

	const total = calculateTotalPrice(storedProducts);

	const navigate = useNavigate();
	const goToCheckout = () => {
		setHeaderOn(false);
		navigate('/checkout');
	};

	return (
		<div className={styles.cart}>
			<div className={styles.container}>
				<p>Coșul tău</p>
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
																				src={require(`../images/${row['image']}`)}
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
																		{'Tablou Canvas ' + value}
																		{row['chassis'] === true && (
																			<p className={styles.frame}>
																				Montare pe cadru de lemn
																			</p>
																		)}
																		{row['frameColor'] !== 'fără' && (
																			<p className={styles.frame}>
																				Culoare ramă: {row['frameColor']}
																			</p>
																		)}

																		<p style={{ fontSize: '20px' }}>
																			{(row['quantity'] * row['price']).toFixed(
																				2
																			) + ' lei'}
																		</p>
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
									{'Total:  ' + total.toFixed(2) + ' lei'}
								</p>
								<p
									style={{
										position: 'relative',
										fontStyle: 'italic',
										fontSize: '4vw',
										paddingRight: '2%',
									}}
									align='right'
								>
									Costurile de livrare și reducere vor fi calculate in Checkout.
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
								<Button
									className={styles.checkoutButton}
									onClick={() => {
										goToCheckout();
									}}
								>
									Mergi la Checkout
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
										Continuă cumpărăturile{' '}
									</Link>
								</Button>
							</div>
						</TableContainer>
					</Paper>
				</ThemeProvider>
			)}
		</div>
	);
};
