import React, { useEffect } from 'react';

import Button from '@material-ui/core/Button';
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
import emptyCart from '../images/emptyCart.jpeg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { columns } from '../constants/cartColumns.js';
import CartActions from './CartActions';

export const DesktopCart = () => {
	const { itemCount, setItemCount } = useStateContext();
	const { headerOn, setHeaderOn } = useStateContext();

	useEffect(() => {
		setHeaderOn(true);
	}, []);

	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);
	const navigate = useNavigate();

	const listItems = (colors) => {
		return colors.map((color) => (
			<div
				style={{
					width: '40px',
					height: '30px',
					borderRadius: '3px',
					margin: '1%',
					marginTop: '5%',
					// backgroundColor: 'black',
					background: `rgba(${color[0][1]}, ${color[1][1]}, ${color[2][1]}, ${color[3][1]})`,
				}}
			></div>
		));
	};

	const calculateTotalPrice = () => {
		return storedProducts.reduce((a, v) => (a = a + v.quantity * 120), 0);
	};

	const goToCheckout = () => {
		setHeaderOn(false);
		navigate('/checkout');
	};

	return (
		<div className={styles.cart}>
			<div className={styles.hContainer}>
				<h>Coșul tău</h>
			</div>
			{storedProducts.length === 0 && setItemCount(0)}
			{storedProducts.length === 0 ? (
				<img src={emptyCart} style={{ width: '30%', height: '30%' }} />
			) : (
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
											key={row.code}
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
															{column.id == 'title' ? (
																<div>
																	{'Tablou personalizat ' + value}
																	<div
																		style={{
																			display: 'flex',
																			flexDirection: 'row',
																		}}
																	>
																		{listItems(row['colors'])}
																	</div>
																</div>
															) : column.id == 'image' ? (
																<img
																	src={require(`../images/${value}`)}
																	width='130'
																/>
															) : column.id == 'quantity' ? (
																<CartActions
																	quantity={value}
																	productId={index}
																/>
															) : column.id == 'total' ? (
																'' + row['quantity'] * 120 + '.00 lei'
															) : column.id != 'colors' ? (
																value
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
							Total: {'' + calculateTotalPrice() + ' lei'}
						</p>
						<p className={styles.pTva} align='right'>
							TVA inclus, costurile de livrare vor fi calculate in Checkout.
						</p>
					</div>
					<div className={styles.buttonContainer}>
						<Button
							className={styles.checkoutContainer}
							style={{ textDecoration: 'none', color: 'black' }}
							onClick={() => {
								goToCheckout();
							}}
						>
							Mergi la Checkout
						</Button>
						<Button className={styles.shopContainerButton}>
							<Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
								Continuă cumpărăturile{' '}
							</Link>
						</Button>
					</div>
				</Paper>
			)}
		</div>
	);
};
