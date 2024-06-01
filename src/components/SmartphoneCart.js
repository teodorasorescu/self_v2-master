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
import Button from '@material-ui/core/Button';
import emptyCart from '../images/emptyCart.jpeg';
import CartActions from './CartActions';
import { calculateTotalPrice, price } from '../constants/productConstants';

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
				<img src={emptyCart} className={styles.image} alt='description' />
			) : (
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
																			alt='description'
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
																	{'Poster personalizat ' + value}
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
								TVA inclus, costurile de livrare și reducere vor fi calculate in
								Checkout.
							</p>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								position: 'relative',
							}}
						>
							<Button
								style={{
									backgroundColor: 'rgba(248, 221, 170, 0.484)',
									height: '50px',
									fontSize: '18px',
									width: '100vw',
								}}
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
								<Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
									Continuă cumpărăturile{' '}
								</Link>
							</Button>
						</div>
					</TableContainer>
				</Paper>
			)}
		</div>
	);
};
