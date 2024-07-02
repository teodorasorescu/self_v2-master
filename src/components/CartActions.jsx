import { loadProducts } from '../reducers/slices/productsSlice';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useStateContext } from '../contexts/ContextProvider';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

const CartActions = ({ quantity, productId }) => {
	const dispatch = useDispatch();
	const { itemCount, setItemCount } = useStateContext();
	const storedProducts = JSON.parse(localStorage.getItem('products'));

	const incrementQuantity = (index) => {
		const updatedProducts = storedProducts.map((product, i) => {
			if (i === index) {
				// Increment the clicked counter
				const updatedProduct = {
					id: product.id,
					image: product.image,
					price: product.price,
					title: product.title,
					colors: product.colors,
					quantity: Math.max(product.quantity + 1, 1),
					description: product.description,
					frameColor: product.frameColor,
					chassis: product.chassis,
					subtitle: product.subtitle,
				};

				return updatedProduct;
			} else {
				return product;
			}
		});

		dispatch(loadProducts(updatedProducts));
	};

	const decrementQuantity = (index) => {
		const updatedProducts = storedProducts.map((product, i) => {
			if (i === index) {
				// Increment the clicked counter

				const updatedProduct = {
					id: product.id,
					image: product.image,
					price: product.price,
					title: product.title,
					colors: product.colors,
					quantity: Math.max(product.quantity - 1, 1),
					description: product.description,
					frameColor: product.frameColor,
					chassis: product.chassis,
					subtitle: product.subtitle,
				};

				return updatedProduct;
			} else {
				return product;
			}
		});

		dispatch(loadProducts(updatedProducts));
	};

	const deleteProduct = (productId) => {
		const newList = storedProducts.filter((_, i) => i !== productId);

		dispatch(loadProducts(newList));
	};

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<div>
				{quantity > 1 && (
					<input
						type='button'
						defaultValue='-'
						className='button-minus'
						data-field='quantity'
						onClick={() => {
							decrementQuantity(productId);
							setItemCount(
								Math.max(
									Number.parseInt(localStorage.getItem('itemCount')) - 1,
									0
								)
							);
						}}
					/>
				)}
				<input
					style={{
						width: '40px',
						backgroundColor: '#ffffff00',
						textAlign: 'center',
						margin: '0 5px',
					}}
					type='number'
					step='1'
					name='quantity'
					max=''
					defaultValue={quantity}
					readOnly
				/>

				<input
					type='button'
					defaultValue='+'
					className='button-plus'
					data-field='quantity'
					onClick={() => {
						incrementQuantity(productId);
						setItemCount(
							Math.max(
								Number.parseInt(localStorage.getItem('itemCount')) + 1,
								0
							)
						);
					}}
				/>
			</div>
			<Button
				onClick={() => {
					deleteProduct(productId);
					setItemCount(
						Math.max(localStorage.getItem('itemCount') - quantity, 0)
					);
				}}
				style={{
					right: '-5vw',
					backgroundColor: '#ffffff00',
				}}
			>
				Elimină x
			</Button>
		</div>
	);
};

CartActions.propTypes = {
	quantity: PropTypes.number,
	productId: PropTypes.number,
};

CartActions.defaultProps = {
	quantity: noop,
	productId: noop,
};

export default CartActions;
