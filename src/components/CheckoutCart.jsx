import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from '@mui/material/Badge';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import styles from '../styling/checkout.cart.module.scss';
import {
	calculateTotalPrice,
	computeProductsLength,
	price,
} from '../constants/productConstants';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice } from '../reducers/slices/deliveryPriceSlice';

export const CheckoutCart = ({ storedProducts }) => {
	const columns = [
		{ id: 'image', label: 'Articol' },
		{ id: 'title', label: '' },

		{
			id: 'total',
			label: 'Total',
			align: 'right',
		},
	];

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
					background: `rgba(${color[0][1]}, ${color[1][1]}, ${color[2][1]}, ${color[3][1]})`,
				}}
			></div>
		));
	};

	const total = calculateTotalPrice(storedProducts);

	const discountNo = Math.floor(computeProductsLength(storedProducts) / 3);
	const discount = false;
	// computeProductsLength(storedProducts) / 3 >= 1;

	let deliveryPrice = useSelector(selectDeliveryPrice);

	if (deliveryPrice === 0) {
		deliveryPrice = parseInt(localStorage.getItem('deliveryPrice'), 10);
	}

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
						font-weight: 600;
					}
				`,
			},
		},
	});

	const calculateTotal = () => {
		if (discount) {
			return (total - price * discountNo + deliveryPrice).toFixed(2);
		}
		return (total + deliveryPrice).toFixed(2);
	};

	console.log(storedProducts);
	return (
		<div className={styles.cartContainer}>
			<div className={styles.container}>
				<ThemeProvider theme={theme}>
					<TableContainer>
						<Table>
							<TableBody>
								{storedProducts.map((row, index) => {
									return (
										<TableRow hover role='checkbox' tabIndex={-1} key={index}>
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
																		<Badge
																			color='primary'
																			badgeContent={row['quantity']}
																		>
																			<img
																				src={require(`../images/${row['image']}`)}
																				width='70'
																				alt='tablou personalizat gradient canvas'
																			/>{' '}
																		</Badge>
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
															) : column.id === 'total' ? (
																'' +
																(row['quantity'] * row['price']).toFixed(2) +
																' lei'
															) : column.id === 'title' ? (
																<>
																	{'Tablou Canvas ' + value}
																	{row['chassis'] === true && (
																		<p className={styles.frame}>
																			Montare pe șasiu de lemn
																		</p>
																	)}
																	{row['frameColor'] !== 'fără' && (
																		<p className={styles.frame}>
																			Culoare ramă: {row['frameColor']}
																		</p>
																	)}
																</>
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
				</ThemeProvider>
				<div className={styles.priceContainer}>
					<div className={styles.pLeftContainer}>
						<p align='left'>Subtotal</p>
						<p className={styles.pRightContainer}>
							{'' + total.toFixed(2) + ' lei'}
						</p>
					</div>
					{discount && (
						<div className={styles.discountContainer}>
							<p align='left'>Reducere</p>
							<p className={styles.pRightContainer}>
								{'-' + (price * discountNo).toFixed(2) + ' lei'}
							</p>
						</div>
					)}
					<div className={styles.pLeftContainer}>
						<p align='left'>Transport</p>
						<p className={styles.pTransportContainer}>
							&nbsp;{deliveryPrice.toFixed(2)} lei
						</p>
					</div>
					<div className={styles.pTotalContainer}>
						<p align='left'>Total</p>
						<p className={styles.totalValueContainer}>
							{'' + calculateTotal() + ' lei'}{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
