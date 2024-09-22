import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadDiscountState } from '../slices/discountFormSlice';

const sendDiscountAction = (discount, dispatch) => {
	axios
		.post(`${BACKEND_PATH}/discount`, discount)
		.then(() => {
			dispatch(loadDiscountState(true));
		})
		.catch(() => {
			dispatch(loadDiscountState(false));
		});
};

export default sendDiscountAction;
