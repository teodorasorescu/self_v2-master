import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import {
	loadDiscountCodeState,
	loadDiscountCodeValue,
} from '../slices/discountCodeSlice';
import {
	modifyExistingDiscount,
	modifyProductPrices,
} from '../../constants/productConstants';

const sendDiscountAction = (discountCode, dispatch, storedProducts) => {
	axios
		.post(`${BACKEND_PATH}/discount/` + discountCode)
		.then((response) => {
			const discountReceived = response.data.value;
			const discountCodeValue = parseInt(
				localStorage.getItem('discountValue'),
				10
			);

			if (discountCodeValue !== 0 && discountReceived !== discountCodeValue) {
				modifyExistingDiscount(storedProducts, discountReceived);
			} else {
				modifyProductPrices(storedProducts, discountReceived);
			}

			dispatch(loadDiscountCodeValue(discountReceived));
			localStorage.setItem('discountCode', response.data.discountCode);
			dispatch(loadDiscountCodeState(true));
			window.location.reload();
		})
		.catch(() => {
			dispatch(loadDiscountCodeValue(0));
			dispatch(loadDiscountCodeState(false));
		});
};

export default sendDiscountAction;
