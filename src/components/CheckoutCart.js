import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from '@material-ui/core/Badge';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import styles from '../styling/checkout.cart.module.scss';

export const CheckoutCart = () => {
	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);

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

	const total = storedProducts.reduce((a, v) => (a = a + v.quantity * 120), 0);

	const calculateTotal = () => {
		return total + 20;
	};
	return (
		<div className={styles.cartContainer}>
			<div className={styles.container}>
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
																			alt='description'
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
															'' + row['quantity'] * 120 + '.00 lei'
														) : column.id === 'title' ? (
															'Tablou personalizat ' + value
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
				<div className={styles.priceContainer}>
					<div className={styles.pLeftContainer}>
						<p align='left'>Subtotal</p>
						<p className={styles.pRightContainer}>{'' + total + '.00 lei'}</p>
					</div>
					<div className={styles.pLeftContainer}>
						<p align='left'>Transport</p>
						<p className={styles.pTransportContainer}>&nbsp; 20.00 lei</p>
					</div>
					<div className={styles.pTotalContainer}>
						<p align='left'>Total</p>
						<p className={styles.totalValueContainer}>
							{'' + calculateTotal() + '.00 lei'}{' '}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
