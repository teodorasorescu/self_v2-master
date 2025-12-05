import { useEffect } from 'react';
import {
	selectPoster,
	isPosterLoading,
} from '../../../reducers/slices/posterSlice';
import Loader from '../../ui/loader/Loader';
import getPosterByUrlTitle from '../../../reducers/actions/getPosterByUrlTitle';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	suport,
	wishCardsCandleDetails,
} from '../../../constants/productConstants';
import ReactGA from 'react-ga4';
import CardInfoPage from '../../pages/cardsInfo/CardInfoPage';

const CardDetails = () => {
	const { urlTitle } = useParams();
	const dispatch = useDispatch();
	const isPageLoading = useSelector(isPosterLoading);
	const poster = useSelector(selectPoster);
	let content;
	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<CardInfoPage
				product={poster}
				suport={suport}
				details={wishCardsCandleDetails}
			/>
		);
	}

	useEffect(() => {
		ReactGA.send({ hitType: 'pageview', page: urlTitle });
		getPosterByUrlTitle(urlTitle, dispatch);
	}, []);

	return <>{content}</>;
};

export default CardDetails;
