import axios from 'axios';
import { BACKEND_PATH } from '../../constants/links';

const sendOrder = async (dispatch, optionId) => {
	await axios
		.delete(`${BACKEND_PATH}/options/id/` + optionId)
		.then(() => {
			location.reload();
		})
		.catch(() => {
			//dispatch(loadDeletedSuccessfully(false));
		});
};

export default sendOrder;
