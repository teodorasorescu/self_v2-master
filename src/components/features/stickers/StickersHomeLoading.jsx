import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../ui/loader/Loader';
import {
	areStickersLoading,
	selectStickers,
} from '../../../reducers/slices/stickersSlice';
import getStickersAction from '../../../reducers/actions/getStickersAction';
import SelectedForYouShowcase from '../selectedForYou/SelectedForYouShowcase';

const PostersHomeLoading = ({ data }) => {
	const dispatch = useDispatch();
	const isPageLoading = useSelector(areStickersLoading);
	let stickers = useSelector(selectStickers);

	useEffect(() => {
		getStickersAction(dispatch);
	}, [dispatch]);

	let content;

	if (isPageLoading) {
		content = <Loader />;
	} else {
		content = (
			<SelectedForYouShowcase
				products={stickers}
				data={data}
				title={'Decorative Objects by Sweets&Beadz'}
			/>
		);
	}

	return <>{content}</>;
};

export default PostersHomeLoading;
