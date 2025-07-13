import { BACKEND_PATH } from '../../constants/links';
import axios from 'axios';

const buildQuizUrl = (preferences) => {
	const params = new URLSearchParams();

	preferences.forEach((p) => params.append('pref', p));

	return `/quiz/result?${params.toString()}`;
};

const getQuizResult = (preferences) => {
	const url = buildQuizUrl(preferences);
	console.log(url);
	axios
		.get(`${BACKEND_PATH}` + url)
		.then((response) => {
			console.log(response.data);
			localStorage.setItem('QUIZ_RESULT', JSON.stringify(response.data));
		})
		.catch(() => {});
};

export default getQuizResult;
