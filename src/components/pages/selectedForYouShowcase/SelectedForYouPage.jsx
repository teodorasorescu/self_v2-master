import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	arePostersLoading,
	selectPosters,
} from '../../../reducers/slices/postersSlice';
import getPostersAction from '../../../reducers/actions/getPostersAction';
import Loader from '../../ui/loader/Loader';
import SelectedForYouShowcase from '../../features/selectedForYou/SelectedForYouShowcase';

const SelectedForYouPage = ({ data }) => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(arePostersLoading);
	let storedPosters = useSelector(selectPosters);

	useEffect(() => {
		if (storedPosters.length === 0) {
			getPostersAction(dispatch);
		}
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = <SelectedForYouShowcase products={storedPosters} data={data} />;
	}

	return <>{content}</>;
};

export default SelectedForYouPage;
