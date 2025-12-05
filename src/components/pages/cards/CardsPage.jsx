import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectCards,
	selectPosters,
} from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import CardsDetailsPage from './CardsDetailsPage';

const CardsPage = () => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(arePostersLoading);
	let cards = useSelector(selectCards);

	useEffect(() => {
		if (cards.length === 0) {
			getPostersAction(dispatch, 'holiday-card');
		}
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <CardsDetailsPage posters={cards} />;
	}

	return <>{content}</>;
};

export default CardsPage;
