import { loadProducts } from '../reducers/productsSlice';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useStateContext } from '../contexts/ContextProvider';

const CartActions = ({ quantity, productId }) => {
	const dispatch = useDispatch();
	const { itemCount, setItemCount } = useStateContext();
	const localStoreProducts = localStorage.getItem('products');
	const storedProducts = JSON.parse(localStoreProducts);

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
						value='-'
						className='button-minus'
						data-field='quantity'
						onClick={() => {
							decrementQuantity(productId);
							setItemCount(Math.max(itemCount - 1, 1));
						}}
					/>
				)}
				<input
					style={{
						width: '40px',
						backgroundColor: '#ffffff00',
					}}
					type='number'
					step='1'
					name='quantity'
					max=''
					value={quantity}
				/>

				<input
					type='button'
					value='+'
					className='button-plus'
					data-field='quantity'
					onClick={() => {
						incrementQuantity(productId);
						setItemCount(Math.max(itemCount + 1, 1));
					}}
				/>
			</div>
			<Button
				onClick={() => {
					deleteProduct(productId);
					setItemCount(Math.max(itemCount - quantity, 0));
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

export default CartActions;
