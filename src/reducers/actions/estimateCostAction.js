import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';
import { loadLockerDeliveryState } from '../slices/lockerDeliveryAmountSlice';
import { loadHomeDeliveryState } from '../slices/deliveryPriceSlice';

const estimateCostAction = (request, dispatch) => {
	axios
		.post(`${BACKEND_PATH}/shipping/cost-estimate`, request)
		.then((response) => {
			const amount = response.data.amount;

			if (request.shippingMethod == 2) {
				dispatch(loadLockerDeliveryState(amount));
			}

			if (request.shippingMethod == 1) {
				dispatch(loadHomeDeliveryState(amount));
			}
		})
		.catch(() => {});
};

export default estimateCostAction;
