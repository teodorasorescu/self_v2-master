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
	getCurrencyByCountry,
} from '../constants/utils';

import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice } from '../reducers/slices/deliveryPriceSlice';
import { S3_BUCKET } from '../constants/links';
import { price } from '../constants/productConstants';
import { useCountry } from '../contexts/CountryProvider';

export const CheckoutCart = ({ storedProducts }) => {
	const discountCodeValue = parseInt(localStorage.getItem('discountValue'), 10);
	const discountCode = localStorage.getItem('discountCode');
	const { countryCode } = useCountry();
	const currency = ' ' + getCurrencyByCountry(countryCode);

	const columns = [
		{ id: 'image', label: 'Article' },
		{ id: 'title', label: '' },

		{
			id: 'total',
			label: 'Total',
			align: 'right',
		},
	];

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
					marginTop: '5%',
					margin: '2px',
					background: `rgb(${color[0][1]}, ${color[1][1]}, ${color[2][1]})`,
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
			return (total - price * discountNo + deliveryPrice).toFixed(1);
		}
		return (total + deliveryPrice).toFixed(1);
	};

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
																			sx={{
																				'& .MuiBadge-colorPrimary': {
																					backgroundColor: '#7684ff',
																					color: '#fff7e3', // Set text color for better contrast
																				},
																			}}
																		>
																			<img
																				src={`${S3_BUCKET}/${value}`}
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
																<div>
																	<p
																		className={
																			discountCodeValue != 0
																				? styles.discountedPrice
																				: undefined
																		}
																	>
																		{'' +
																			(row['quantity'] * row['price']).toFixed(
																				2
																			) +
																			currency}
																	</p>
																</div>
															) : column.id === 'title' ? (
																<>
																	{value}
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
							{'' + total.toFixed(1) + currency}
						</p>
					</div>

					{discountCodeValue != 0 && (
						<div className={styles.discountContainer}>
							<p align='left'>Reducere</p>
							<p className={styles.pRightContainer}>{discountCode}</p>
						</div>
					)}

					<div className={styles.pLeftContainer}>
						<p align='left'>Shipping</p>
						<p className={styles.pTransportContainer}>
							&nbsp;{deliveryPrice.toFixed(1) + currency}
						</p>
					</div>
					<div className={styles.pTotalContainer}>
						<p align='left'>Total</p>
						<p className={styles.totalValueContainer}>
							{'' + calculateTotal() + currency}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
