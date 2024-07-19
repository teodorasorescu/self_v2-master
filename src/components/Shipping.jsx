import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styling/shipping.module.scss';
import { getLockerPluginInstance } from './EasyboxLocker';

export const Shipping = () => {
	const [shippingMethod, setShippingMethod] = useState(0);
	console.log(shippingMethod);
	let pluginInstance = getLockerPluginInstance();
	//myCustomFunction is your callback function to be executed when locker plugin pushes a post message with selected locker
	//pluginInstance.subscribe(myCustomFunction);

	//display the modal iframe window
	if (shippingMethod === 2) {
		pluginInstance.open();
	}

	function myCustomFunction(msg) {
		console.log('I received this msg from locker plugin:', msg);
		//I received this msg from locker plugin: {"lockerId":1413,"name":"easybox Grozavesti","address":"str. Slt. Alexandru Borneanu nr. 20C","cityId":6,"city":"Sectorul 6","countyId":1,"county":"Bucuresti"}

		//close the modal iframe window
		//	pluginInstance.close();
	}

	return (
		<div>
			<h3 align='left' className={styles.titleShipping}>
				Metodă de expediere - Sameday
			</h3>
			<form className={styles.formContainer}>
				<div className='form-group'>
					{' '}
					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							name='shippingOptions'
							id='homeDelivery'
							value='homeDelivery'
							onChange={() => setShippingMethod(1)}
						/>
						<label
							class='form-check-label'
							className={styles.shippingContainer}
							htmlFor='homeDelivery'
						>
							<p>Livrare la domiciliu</p>
							<p className={styles.pBold}>12,5 lei</p>
						</label>
					</div>
				</div>
				<div className='form-check'>
					<input
						className='form-check-input'
						type='radio'
						name='shippingOptions'
						id='collectionPoint'
						value='collectionPoint'
						onChange={() => setShippingMethod(2)}
					/>
					<label
						class='form-check-label'
						className={styles.shippingContainer}
						htmlFor='collectionPoint'
					>
						<p>Punct de colectare</p>
						<p className={styles.pBold}>12,5 lei</p>
					</label>
				</div>
			</form>
		</div>
	);
};
