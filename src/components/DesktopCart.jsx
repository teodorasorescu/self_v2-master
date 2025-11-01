import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import { useStateContext } from '../contexts/ContextProvider';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from '../styling/cart.module.scss';
import '../styling/quantity.css';
import { useNavigate } from 'react-router-dom';
import { columns } from '../constants/cartColumns.js';
import CartActions from './CartActions';

import DiscountForm from './DiscountForm.jsx';
import { calculateTotalPrice } from '../constants/utils.js';
import { ThemeProvider, createTheme } from '@mui/material';
import { S3_BUCKET } from '../constants/links.js';
import SelectedForYouPage from './pages/selectedForYouShowcase/SelectedForYouPage.jsx';
import { summerProducts } from '../constants/productConstants.js';

export const DesktopCart = ({ currency }) => {
	const emptyCart = S3_BUCKET + '/emptyCart.webp';
	const { itemCount, setItemCount } = useStateContext();
	const { headerOn, setHeaderOn } = useStateContext();
	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);
	const [total, setTotal] = useState(calculateTotalPrice(storedProducts));
	const discountCodeValue = localStorage.getItem('discountValue');
	const navigate = useNavigate();

	const listItems = (colors) => {
		if (colors === undefined) {
			return;
		}
		return colors.map((color) => (
			<div
				key={Math.random() * 101}
				style={{
					width: '40px',
					height: '40px',
					borderRadius: '50%',
					margin: '1%',
					marginTop: '5%',
					background: `rgb(${color[0][1]}, ${color[1][1]}, ${color[2][1]})`,
				}}
			></div>
		));
	};

	const theme = createTheme({
		typography: {
			fontFamily: 'Poppins, sans-seris',
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
					@font-face {
						 font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-style: normal;
						
					}
				`,
			},
		},
	});

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
			<div className={styles.hContainer}>
				<p>Cart</p>
			</div>
			{storedProducts.length === 0 && setItemCount(0)}
			{storedProducts.length === 0 ? (
				<img
					src={emptyCart}
					className={styles.image}
					alt='Nimic in cos. Mai ai timp sa-ti personalizezi tabloul'
				/>
			) : (
				<ThemeProvider theme={theme}>
					<Paper
						sx={{
							width: '100%',
							overflow: 'hidden',
							boxShadow: 'none',
						}}
					>
						<TableContainer>
							<Table stickyHeader aria-label='sticky table'>
								<TableHead>
									<TableRow>
										{columns.map((column) => (
											<TableCell
												key={column.id}
												align={column.align}
												style={{ minWidth: column.minWidth }}
											>
												<div
													style={{
														fontSize: '120%',
													}}
												>
													{column.label}
												</div>
											</TableCell>
										))}
									</TableRow>
								</TableHead>
								<TableBody>
									{storedProducts.map((row, index) => {
										return (
											<TableRow
												hover
												role='checkbox'
												tabIndex={-1}
												key={Math.random() * 101}
											>
												{columns.map((column) => {
													const value = row[column.id];
													return (
														<TableCell key={column.id} align={column.align}>
															<div
																style={{
																	fontSize: 'large',
																}}
															>
																{column.id === 'title' ? (
																	<div>
																		{value}

																		<p className={styles.frame}>
																			Size: {row['size']}
																		</p>
																		{row['chassis'] === true && (
																			<p className={styles.frame}>
																				Ready to Hang
																			</p>
																		)}
																		{row['frameColor'] !== 'none' && (
																			<p className={styles.frame}>
																				Frame: {row['frameColor']}
																			</p>
																		)}

																		<div
																			style={{
																				display: 'flex',
																				flexDirection: 'row',
																			}}
																		>
																			{listItems(row['colors'])}
																		</div>
																	</div>
																) : column.id === 'image' ? (
																	<img
																		src={`${S3_BUCKET}/${value}`}
																		width='130'
																		alt='Tablou Canvas Gradient Personalizat'
																	/>
																) : column.id === 'quantity' ? (
																	<CartActions
																		quantity={value}
																		productId={index}
																	/>
																) : column.id === 'total' ? (
																	(row['quantity'] * row['price']).toFixed(1) +
																	currency
																) : column.id != 'colors' ? (
																	<div>
																		{discountCodeValue != 0 ? (
																			<>
																				{' '}
																				<p className={styles.discountedPrice}>
																					{row['initialPrice'].toFixed(1) +
																						currency}
																				</p>
																				<p className={styles.price}>
																					{row['price'].toFixed(1) + currency}
																				</p>
																			</>
																		) : (
																			<p>
																				{row['price'].toFixed(1) + currency}
																			</p>
																		)}
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
						</TableContainer>
						<div className={styles.textContainer}>
							<p className={styles.pTotal} align='right'>
								Total: {'' + total.toFixed(1) + currency}
							</p>
						</div>
						<div className={styles.buttonContainer}>
							<DiscountForm />
							<Button
								className={styles.checkoutContainer}
								style={{ textDecoration: 'none', color: 'black' }}
								onClick={() => {
									goToCheckout();
								}}
							>
								Checkout
							</Button>
							<Button className={styles.shopContainerButton}>
								<a
									href='/canvas-art-prints'
									style={{ textDecoration: 'none', color: 'black' }}
								>
									Get more posters
								</a>
							</Button>
						</div>
					</Paper>
				</ThemeProvider>
			)}{' '}
			<SelectedForYouPage data={summerProducts} title='Autumn Selection' />
		</div>
	);
};
